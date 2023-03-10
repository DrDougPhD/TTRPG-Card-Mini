# Testing

This repo contains two suites of tests: Jest for testing the JavaScript / React code, and Python-driven Selenium code for behavior-driven tests.

## Setting Up Tests

For Selenium, create a virtual environment and install the Selenium Python bindings.

```
pip install selenium
```


## Running Tests

Jest tests can be executed with the following:

```
npm test
```

Selenium tests can be executed with the following:

```

```


# Tests to Implement


## Image Drag and Drop

* Image is displayed in queue when uploaded to page
* First image appears in image cropper
* More images do not appear immediately in image cropper
* Alert / rejection if dragged file is not an image
  * Do not accept XCF (GIMP images)

