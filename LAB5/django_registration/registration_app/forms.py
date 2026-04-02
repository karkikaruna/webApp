from django import forms
from .models import UserProfile

class RegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = UserProfile
        fields = ['name', 'username', 'password', 'age', 'gender', 'email']

    def clean_age(self):
        age = self.cleaned_data.get('age')
        if age < 1 or age > 120:
            raise forms.ValidationError("Please enter a valid age (1–120).")
        return age
