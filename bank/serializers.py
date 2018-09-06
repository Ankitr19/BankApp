from rest_framework import serializers
from bank.models import BankBranches
class BankBranchesSerializer(serializers.ModelSerializer):

    class Meta:

        model = BankBranches
        fields = '__all__'