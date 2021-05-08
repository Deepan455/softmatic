from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *

from .serializers import MaterialSerializer

# Create your views here.

def index(request):
    return HttpResponse("Hello")

@api_view(['GET'])
def apiview(request):
    me=["ola amigos","How are you all?"]
    return Response('Post Deleted')

@api_view(['GET'])
def materiallist(request):
    materials = Material.objects.all()
    serializer = MaterialSerializer(materials, many=True)

    #if serializer.is_valid():
    #   serializer.save()
    return Response(serializer.data)

#For Company

#To View a Company data
@api_view(['GET'])
def company_view(request, name):
    try:
        company = Company.objects.get('name'==name)
        serailizer = CompanySerailizer(company, many=True)

        return Response(serializer.data)
    
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        return Response(message)


#To Create a Company
@api_view(['POST'])
def company_create(request):
    serializer = CompanySerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    else:
        return Response("Invalid Input")
    
    return Response(serializer.data)

#To Update a Company
@api_view(['POST'])
def company_update(request, name):
    company = Company.objects.get('name'==name)
    serializer = CompanySerializer(instance=company, data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    else:
        return Response("Invalid Input")
    
    return Response(serializer.data)


#To Delete a Company
@api_view(['Delete'])
def company_delete(request, name):
    try:
        company = Company.objects.get('name'==name)
        company.delete()

        return Response(['Post Deleted'])
    
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        return Response(message)


#For Materials


#To View a Material data
@api_view(['GET'])
def material_view(request, name):
    try:
        material = Material.objects.get('name'==name)
        serailizer = MaterialSerailizer(material, many=True)

        return Response(serializer.data)
    
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        return Response(message)


#To Create a Material
@api_view(['POST'])
def material_create(request):
    serializer = MaterailSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    else:
        return Response("Invalid Input")
    
    return Response(serializer.data)

#To Update a Material
@api_view(['POST'])
def material_update(request, name):
    material = Material.objects.get('name'==name)
    serializer = MaterialSerializer(instance=material, data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    else:
        return Response("Invalid Input")
    
    return Response(serializer.data)


#To Delete a Material
@api_view(['Delete'])
def material_delete(request, name):
    try:
        material = Material.objects.get('name'==name)
        material.delete()

        return Response(['Material Deleted'])
    
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        return Response(message)


#For Products

#To View an individual Product data
@api_view(['GET'])
def product_view(request, name):
    try:
        product = Product.objects.get('name'==name)
        serailizer = ProductSerailizer(product, many=True)

        return Response(serializer.data)
    
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        return Response(message)


#To Create a Product
@api_view(['POST'])
def product_create(request):
    serializer = ProductSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    else:
        return Response("Invalid Input")
    
    return Response(serializer.data)

#To Update a Product
@api_view(['POST'])
def product_update(request, name):
    product = Product.objects.get('name'==name)
    serializer = ProductSerializer(instance=product, data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    else:
        return Response("Invalid Input")
    
    return Response(serializer.data)


#To Delete a Product
@api_view(['Delete'])
def product_delete(request, name):
    try:
        product = Product.objects.get('name'==name)
        product.delete()

        return Response(['Product Deleted'])
    
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        return Response(message)



#For Orders



#To View an individual Order data
@api_view(['GET'])
def order_view(request, name):
    try:
        order = Order.objects.get('name'==name)
        serailizer = OrderSerailizer(order, many=True)

        return Response(serializer.data)
    
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        return Response(message)


#To Create an Order
@api_view(['POST'])
def Order_create(request):
    serializer = OrderSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    else:
        return Response("Invalid Input")
    
    return Response(serializer.data)

#To Update a Order
@api_view(['POST'])
def order_update(request, name):
    Order = Order.objects.get('name'==name)
    serializer = OrderSerializer(instance=order, data = request.data)

    if serializer.is_valid():
        serializer.save()
    
    else:
        return Response("Invalid Input")
    
    return Response(serializer.data)


#To Delete an Order
@api_view(['Delete'])
def order_delete(request, name):
    try:
        order = Order.objects.get('name'==name)
        order.delete()

        return Response(['Order Deleted'])
    
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        return Response(message)
