from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import RegistrationForm
from .models import UserProfile

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Registration successful!")
            return redirect('user_list')
        else:
            messages.error(request, "Please fix the errors below.")
    else:
        form = RegistrationForm()

    return render(request, 'registration_app/register.html', {'form': form})


def user_list(request):
    users = UserProfile.objects.all()
    return render(request, 'registration_app/user_list.html', {'users': users})
