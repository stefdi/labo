from django.contrib import admin
from django.urls import path
from articles.views import archive, get_article, create_post, register, auth_login

urlpatterns = [
    path("", archive, name="archive"),
    path("article/new/", create_post, name="create_post"),
    path("article/<int:article_id>/", get_article, name="get_article"),
    path("register/", register, name="register"),
    path("login/", auth_login, name="login"),
    path("admin/", admin.site.urls),
]
