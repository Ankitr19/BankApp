# Generated by Django 2.1.1 on 2018-09-03 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BankBranches',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ifsc', models.CharField(max_length=50)),
                ('bank_id', models.IntegerField()),
                ('branch', models.CharField(max_length=100)),
                ('address', models.TextField(max_length=1000)),
                ('city', models.TextField(max_length=500)),
                ('district', models.TextField(max_length=500)),
                ('state', models.TextField(max_length=100)),
                ('bank_name', models.TextField(max_length=500)),
            ],
        ),
    ]
