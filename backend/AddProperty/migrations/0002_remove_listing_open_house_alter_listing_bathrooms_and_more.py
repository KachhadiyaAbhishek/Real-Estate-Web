# Generated by Django 5.1.1 on 2024-09-24 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AddProperty', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='open_house',
        ),
        migrations.AlterField(
            model_name='listing',
            name='bathrooms',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='listing',
            name='home_type',
            field=models.CharField(choices=[('House', 'House'), ('Flat', 'Flat'), ('Villa', 'Townhouse')], default='House', max_length=50),
        ),
        migrations.AlterField(
            model_name='listing',
            name='zipcode',
            field=models.CharField(max_length=10),
        ),
    ]
