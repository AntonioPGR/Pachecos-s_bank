from models.test_setup import TestAPISetUp


class TestStatmentViewWithoutAuth(TestAPISetUp):
  
  def test_GET_request(self):
    response = self.client.get(self.urls['statments'])
    self.assertEqual(response.status_code, 401)
    
  def test_POST_request(self):
    response = self.client.post(self.urls['statments'])
    self.assertEqual(response.status_code, 401)
  