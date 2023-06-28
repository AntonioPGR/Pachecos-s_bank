from typing import Any
from rest_framework.response import Response

class HttpResponses:
  @staticmethod
  def toRespond(data:Any, status:int):
    return Response(data, status)
  
  @staticmethod
  def ok200( data:Any):
    return HttpResponses.toRespond(data, 200)

  @staticmethod
  def forbidden403(data:Any):
    return HttpResponses.toRespond(data, 403)

  @staticmethod
  def internal500(data:Any):
    return HttpResponses.toRespond(data, 403)

  @staticmethod
  def badrequest400(data:Any):
    return HttpResponses.toRespond(data, 400)

  @staticmethod
  def created201(data:Any):
    return HttpResponses.toRespond(data, 201)