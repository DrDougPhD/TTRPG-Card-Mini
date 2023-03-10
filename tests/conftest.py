import subprocess
import pathlib

from selenium.webdriver import Firefox
import pytest

here = pathlib.Path(__file__).parent


@pytest.fixture
def server():
    # _server = subprocess.Popen([
    #     'npm', 'start'
    #   ],
    #   cwd=here.parent,
    #   stdout=subprocess.PIPE,
    #   stderr=subprocess.STDOUT,
    # )
    # with open('test.log', 'w') as log:
    #   while True:
    #       line = _server.stdout.readline().decode('utf-8')
    #       if not line:
    #           break
    #       log.write(f'{line}\n')
    #       if 'http://localhost:3000/TTRPG-Card-Mini' in line:
    #           break
          
    # print('Starting NPM server...')
    # yield _server

    # with open('test.log', 'a') as log:
    #     log.write('Killing now...\n')

    # _server.kill()
    # TODO: figure out how to start server as part of workflow and then kill it
    yield


@pytest.fixture
def driver(server):
    _driver = Firefox()
    yield _driver
    _driver.quit()
