import rest_framework


from rest_framework import routers, urlpatterns 
from .api import *

router = routers.DefaultRouter()
router.register('api/company', CompanyViewset, 'companies')
router.register('api/material', MaterialViewset, 'materials')
router.register('api/product', ProductViewset, 'products')
router.register('api/order', OrderViewset, 'orders')


urlpatterns = router.urls