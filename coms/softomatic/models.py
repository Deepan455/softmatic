from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Company(models.Model):
    name = models.CharField(max_length = 250, unique=True)
    phone = models.BigIntegerField()
    email = models.EmailField()
    admins = models.ManyToManyField("User", related_name="admins", blank=True)
    personnels = models.ManyToManyField("User", blank=True)
    materials  = models.ManyToManyField("Material", related_name = "mat_in_comp", blank=True)

    def __str__(self):
        return self.name

class Material(models.Model):
    name = models.CharField(max_length = 500, unique=True)
    unit = models.CharField(max_length = 50)
    category = models.CharField(max_length = 500)
    quantity = models.FloatField()

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length = 200, unique=True)
    item_code = models.CharField(max_length = 20, unique=True)
    weight = models.FloatField()
    dimensions = models.CharField(max_length = 100)
    materials = models.ManyToManyField("Material", through='RequiredMaterial')
    quantity = models.FloatField(blank = True, null = True)

    def __str__(self):
        return self.name

class RequiredMaterial(models.Model):
    product = models.ForeignKey("Product", related_name="products", on_delete=models.CASCADE)
    material = models.ForeignKey("Material", related_name="materials", on_delete=models.CASCADE)
    quantity = models.FloatField()

    def __str__(self):
        return f"{self.product} - {self.material}"

class Order(models.Model):
    ONGOING = 'ON'
    COMPLETED = 'DONE'
    CANCELLED = 'GONE'
    ORDER_STATUSES=[
        (ONGOING,'ongoing'),
        (COMPLETED, 'completed'),
        (CANCELLED, 'cancelled')
    ]

    name = models.CharField(max_length = 500, unique=True)
    customer = models.ForeignKey("User", related_name="customers", on_delete=models.CASCADE)
    receiver = models.ForeignKey("User", related_name="receivers", on_delete=models.CASCADE)
    products = models.ManyToManyField('Product', through='RequiredProduct')
    order_date = models.DateField()
    submission_date = models.DateField()
    status = models.CharField(max_length=6, choices=ORDER_STATUSES, default=ONGOING)

    def __str__(self):
        return self.name

class RequiredProduct(models.Model):
    product = models.ForeignKey("Product",related_name="needproduct", on_delete=models.CASCADE)
    order = models.ForeignKey("Order",related_name="needorder", on_delete=models.CASCADE)
    quantity = models.FloatField()

    def __str__(self):
        return f"{self.order} - {self.product}"