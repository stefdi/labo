from django.contrib import admin
from django.urls import path
from articles.views import archive

urlpatterns = [
    path("", archive, name="archive"),
    path("admin/", admin.site.urls),
]
