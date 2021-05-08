from django.contrib import admin

from .models import User, Company, Product, Material, RequiredMaterial, Order, RequiredProduct

admin.site.register(User)
admin.site.register(Company)
admin.site.register(Product)
admin.site.register(Material)
admin.site.register(RequiredMaterial)
admin.site.register(Order)
admin.site.register(RequiredProduct)