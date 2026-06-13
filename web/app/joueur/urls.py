from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JoueurViewSet

router = DefaultRouter()
router.register(r'joueurs', JoueurViewSet)

urlpatterns = [
    path('', include(router.urls)),
]