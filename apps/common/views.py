from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import TemplateView, CreateView
from .forms import SignUpForm

class HomeView(TemplateView):
    template_name = 'common/home.html'

class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'common/dashboard.html'
    login_url = reverse_lazy('home')

class SignUpView(CreateView):
    form_class = SignUpForm
    success_url = reverse_lazy('home')
    template_name = 'common/register.html'