from .models import *
from .serializers import *
from rest_framework import viewsets, permissions


#Lead Viewset

class CompanyViewset(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CompanySerializer

class MaterialViewset(viewsets.ModelViewSet):
    queryset = Material.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = MaterialSerializer

class ProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProductSerializer

class OrderViewset(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = OrderSerializer
