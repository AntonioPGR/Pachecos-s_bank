# Generated by Django 4.2.2 on 2023-06-26 13:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('statments', '0002_alter_statmentmodel_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='statmentmodel',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
