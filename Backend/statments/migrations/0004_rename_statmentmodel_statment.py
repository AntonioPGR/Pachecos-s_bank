# Generated by Django 4.2.2 on 2023-06-26 13:48

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('statments', '0003_alter_statmentmodel_owner'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='StatmentModel',
            new_name='Statment',
        ),
    ]
