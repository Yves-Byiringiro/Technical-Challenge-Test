# Generated by Django 4.2.2 on 2023-06-22 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompanyInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mission', models.TextField()),
                ('vision', models.TextField()),
                ('objectives', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='Mission',
        ),
        migrations.DeleteModel(
            name='Objectives',
        ),
        migrations.DeleteModel(
            name='Vision',
        ),
    ]
