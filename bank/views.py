from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from rest_framework import generics
from bank.serializers import BankBranchesSerializer
from bank.models import BankBranches
from django.http import JsonResponse

# Create your views here.
class index(TemplateView):
    template_name = "index.html"

class IFSCApi(generics.ListAPIView):
    serializer_class = BankBranchesSerializer
    def get_queryset(self):
        ifsc_code = self.kwargs.pop('slug')
        data = BankBranches.objects.filter(ifsc__iexact=ifsc_code)
        json_res = []
        for entry in data:
            json_obj = {}
            json_obj["bank_name"] = entry.bank_name
            json_obj["city"] = entry.city
            json_obj["state"] = entry.state
            json_obj["district"] = entry.district
            json_obj["address"] = entry.address
            json_obj["branch"] = entry.branch
            json_obj["bank_id"] = entry.bank_id
            json_obj["ifsc"] = entry.ifsc
            json_res.append(json_obj)
        return json_res

class BankBranchesApi(generics.ListAPIView):
    serializer_class = BankBranchesSerializer

    def get_queryset(self):
        bank_name = self.request.query_params['bank_name']
        city = self.request.query_params['City']
        data = BankBranches.objects.filter(bank_name__iexact=bank_name).filter(city__iexact=city)
        json_res = []
        for entry in data:
            json_obj = {}
            json_obj["bank_name"] = entry.bank_name
            json_obj["city"] = entry.city
            json_obj["state"] = entry.state
            json_obj["district"] = entry.district
            json_obj["address"] = entry.address
            json_obj["branch"] = entry.branch
            json_obj["bank_id"] = entry.bank_id
            json_obj["ifsc"] = entry.ifsc
            json_res.append(json_obj)
        return json_res
