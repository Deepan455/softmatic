from django.urls import path
from . import views

urlpatterns = [
    path("", views.index,name="index"), #Basic front view
    path("view", views.apiview, name="api_view"),
    path("material", views.materiallist, name="materail"),

    #For Company
    path("company/view/<str:name>", views.company_view, name="company_view"),
    path("company/create", views.company_create, name="company_create"),
    path("company/update", views.company_update, name="company_update"),
    path("company/delete/<str:name>", views.company_delete, name="company_delete"),

    #For Materials

]