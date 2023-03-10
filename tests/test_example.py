from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


def test_selenium(driver):
    driver.get('http://localhost:3000/TTRPG-Card-Mini')
    # assert 'Python' in driver.title
    # elem = driver.find_element(By.NAME, 'q')
    # elem.clear()
    # elem.send_keys('pycon')
    # elem.send_keys(Keys.RETURN)
    # assert 'No results found.' not in driver.page_source
    # driver.close()
    assert True
