from django.contrib.auth import authenticate, logout as auth_logout
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from .models import ServiceProvider
from .serializers import ServiceProviderSerializer
from .serializers import UserSerializer
from .serializers import ServiceRequestSerializer



@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if not user:
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)

    # Add additional logic as needed, such as generating tokens or session management

    return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def user_logout(request):
    auth_logout(request)
    return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

@csrf_exempt
def register_service_provider(request):
    # Implementation of register_service_provider view function
    # Example implementation:
    if request.method == 'POST':
        serializer = ServiceProviderSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    return JsonResponse({'error': 'Method not allowed'}, status=405)

class ServiceProviderViewSet(viewsets.ModelViewSet):
    queryset = ServiceProvider.objects.all()
    serializer_class = ServiceProviderSerializer

@api_view(['POST'])
def create_service_request(request):
    serializer = ServiceRequestSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)  # Assign current user to the service request
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

