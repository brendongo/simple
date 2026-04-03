import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_time(client):
    """Test the /time endpoint."""
    response = client.get('/time')
    assert response.status_code == 200
    data = response.get_json()
    assert 'time' in data
    # Check if time format is roughly correct (YYYY-MM-DD HH:MM:SS)
    assert len(data['time']) == 19
