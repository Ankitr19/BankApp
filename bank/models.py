from django.db import models

# Create your models here.

class BankBranches(models.Model):

	ifsc = models.CharField(max_length=50)
	bank_id = models.IntegerField()
	branch = models.CharField(max_length=100)
	address = models.TextField(max_length=1000)
	city = models.TextField(max_length=500)
	district = models.TextField(max_length=500)
	state = models.TextField(max_length=100)
	bank_name = models.TextField(max_length=500)

	def __str__(self):
		return '%s %s' %(self.ifsc,self.bank_name)
