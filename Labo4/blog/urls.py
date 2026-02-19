from django.contrib import admin
from django.urls import path
from articles.views import archive, get_article

urlpatterns = [
    path("", archive, name="archive"),
    path("article/<int:article_id>/", get_article, name="get_article"),
    path("admin/", admin.site.urls),
]
