from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework.response import Response
from .models import *
from .serializer import CompanyInfoSerializer



class GetCompanyInfo(APIView):
    def get(self, request):
        try:
            company_info = CompanyInfo.objects.first()
            serialized_company_info = CompanyInfoSerializer(company_info)
            return Response(serialized_company_info.data, status=status.HTTP_200_OK)
        except Exception as e:
            #print(e)  # for testing purpose
            return Response({"error": "something went wrong", }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
