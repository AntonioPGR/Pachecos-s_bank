from rest_framework.response import Response

class HttpResponses:
  @staticmethod
  def toRespond(data:dict, status:int):
    return Response(data, status)
  
  @staticmethod
  def ok200( data:dict):
    return HttpResponses.toRespond(data, 200)

  @staticmethod
  def forbidden403(data:dict):
    return HttpResponses.toRespond(data, 403)

  @staticmethod
  def internal500(data:dict):
    return HttpResponses.toRespond(data, 403)

  @staticmethod
  def badRequest400(data:dict):
    return HttpResponses.toRespond(data, 400)

  @staticmethod
  def created201(data:dict):
    return HttpResponses.toRespond(data, 201)
  
  @staticmethod
  def paymentRequired402(data:dict):
    return HttpResponses.toRespond(data, 402)
  
  @staticmethod
  def conflict409(data:dict):
    return HttpResponses.toRespond(data, 409)
  
  @staticmethod
  def unprocessableEntity422(data:dict):
    return HttpResponses.toRespond(data, 422)
    