# Generated by Django 3.2.3 on 2021-06-04 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('softomatic', '0002_auto_20210514_1300'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='materials',
            field=models.ManyToManyField(blank=True, related_name='mat_in_comp', to='softomatic.Material'),
        ),
        migrations.AlterField(
            model_name='product',
            name='dimensions',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='product',
            name='quantity',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
