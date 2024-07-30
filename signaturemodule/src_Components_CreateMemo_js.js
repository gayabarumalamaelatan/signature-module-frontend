"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknew_module_grit_front_end"] = self["webpackChunknew_module_grit_front_end"] || []).push([["src_Components_CreateMemo_js"],{

/***/ "./src/Components/CreateMemo.js":
/*!**************************************!*\
  !*** ./src/Components/CreateMemo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2-react-content */ \"./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js\");\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _drop_file_input_DropFileInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drop-file-input/DropFileInput */ \"./src/Components/drop-file-input/DropFileInput.js\");\n/* harmony import */ var _config_Constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/Constant */ \"./src/config/Constant.js\");\n/* harmony import */ var _config_Constant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config_Constant__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config_ConfigUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/ConfigUrl */ \"./src/config/ConfigUrl.js\");\n\n\n\n\n\n\n\n\n\n\nconst MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()));\nconst token = (0,_config_Constant__WEBPACK_IMPORTED_MODULE_5__.getToken)();\nconst gettingUserId = (0,_config_Constant__WEBPACK_IMPORTED_MODULE_5__.getUserId)();\nconst headers = {\n  Authorization: \"Bearer \".concat(token)\n};\nfunction CreateMemo() {\n  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    title: \"Internal Memo\",\n    nomor: \"\",\n    requestor: \"\",\n    requestDate: \"\",\n    requestTitle: \"\",\n    requestDetail: \"\",\n    tipeDokumen: \"BAST\",\n    createDate: \"\",\n    dueDate: \"\",\n    statusMemo: \"ON_PROGRESS\",\n    userMaker: \"\",\n    userApproval1Note: \"\",\n    userApproval2Note: \"\",\n    userApproval1Name: \"\",\n    userApproval2Name: \"\",\n    userId: gettingUserId\n  });\n  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const [newOptions, setNewOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n  const [selectedFiles, setSelectedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const [fileError, setFileError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const [uploadedFiles, setUploadedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const [fileList, setFileList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const [gettingUserName, setGettingUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_config_Constant__WEBPACK_IMPORTED_MODULE_5__.getUserName)());\n  const handleFileChange = files => {\n    setSelectedFiles(files);\n  };\n\n  //Reset form function\n  const handleCancel = event => {\n    event.preventDefault();\n    const currentDate = new Date().toISOString().split('T')[0];\n    setFormData({\n      title: \"Internal Memo\",\n      nomor: \"\",\n      requestor: \"\",\n      requestDate: currentDate,\n      requestTitle: \"\",\n      requestDetail: \"\",\n      tipeDokumen: \"BAST\",\n      createDate: \"\",\n      dueDate: \"\",\n      statusMemo: \"ON_PROGRESS\",\n      userMaker: \"\",\n      userApproval1Note: \"\",\n      userApproval2Note: \"\",\n      userApproval1Name: \"\",\n      userApproval2Name: \"\"\n    });\n    setSelectedFiles([]);\n    setErrors({});\n    setFileError(false);\n    setUploadedFiles([]);\n    setFileList([]);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const intervalId = setInterval(() => {\n      const newUserName = (0,_config_Constant__WEBPACK_IMPORTED_MODULE_5__.getUserName)();\n      if (newUserName !== gettingUserName) {\n        setGettingUserName(newUserName);\n      }\n    }, 1000);\n    return () => clearInterval(intervalId);\n  }, [gettingUserName]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const params = 'username&status&page=0&size=500';\n    axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"\".concat(_config_ConfigUrl__WEBPACK_IMPORTED_MODULE_6__.MEMO_SERVICE_USERNAME_LISTS, \"?\").concat(params), {\n      headers\n    }).then(response => {\n      const usernames = response.data.users.map(user => user.userName);\n      setOptions(usernames);\n    }).catch(error => {\n      console.error('error', error);\n    });\n    const currentDate = new Date().toISOString().split('T')[0];\n    setFormData(prevData => ({\n      ...prevData,\n      requestDate: currentDate\n    }));\n  }, []);\n  const validateForm = () => {\n    const requiredFields = [\"title\", \"tipeDokumen\", \"nomor\", \"requestor\", \"requestDate\", \"requestTitle\", \"requestDetail\", \"createDate\", \"dueDate\", \"statusMemo\", \"userMaker\", \"userApproval1Name\", \"userApproval2Name\"];\n    const newErrors = {};\n    requiredFields.forEach(field => {\n      if (!formData[field]) newErrors[field] = \"\".concat(field.charAt(0).toUpperCase() + field.slice(1), \" is required!\");\n    });\n    if (fileError || uploadedFiles.length === 0) {\n      newErrors.file = setFileError(true);\n    }\n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  };\n\n  //Fungsi require field\n  const validateField = () => {\n    const requiredFields = [\"title\", \"tipeDokumen\", \"nomor\", \"requestor\", \"requestDate\", \"requestTitle\", \"requestDetail\", \"createDate\", \"dueDate\", \"statusMemo\", \"userMaker\", \"userApproval1Name\", \"userApproval2Name\"];\n    const newErrors = {};\n    requiredFields.forEach(field => {\n      if (!formData[field]) newErrors[field] = \"\".concat(field.charAt(0).toUpperCase() + field.slice(1), \" is required!\");\n    });\n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  };\n\n  //Submit Function\n  const handleSubmit = async event => {\n    event.preventDefault();\n\n    //Memanggil Function require field\n    if (!validateForm()) {\n      MySwal.fire(\"Error!\", \"Please fill in all required fields.\", \"error\");\n      return;\n    }\n\n    //Swal popup\n    const result = await MySwal.fire({\n      title: \"Are you sure?\",\n      text: \"Do you want to submit the form?\",\n      icon: \"warning\",\n      showCancelButton: true,\n      cancelButtonText: \"No, cancel!\",\n      confirmButtonText: \"Yes, submit it!\"\n    });\n    if (result.isConfirmed) {\n      try {\n        MySwal.fire({\n          title: \"Loading...\",\n          text: \"Please wait while we process your request.\",\n          showConfirmButton: false,\n          willOpen: () => {\n            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().showLoading();\n          }\n        });\n        const formDataToSend = new FormData();\n        for (const key in formData) {\n          if (formData[key]) formDataToSend.append(key, formData[key]);\n        }\n        const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"\".concat(_config_ConfigUrl__WEBPACK_IMPORTED_MODULE_6__.MEMO_SERVICE_CREATE), formDataToSend, {\n          headers: {\n            Authorization: \"Bearer \".concat(token),\n            'Content-Type': 'application/json'\n          }\n        });\n        MySwal.fire(\"Submitted!\", \"Your form has been submitted.\", \"success\").then(() => {\n          handleCancel(event);\n          setUploadedFiles([]);\n          return response.data;\n        });\n      } catch (error) {\n        MySwal.fire(\"Error!\", \"There was an error submitting the form.\", \"error\");\n      }\n    }\n  };\n  const handleChange = event => {\n    const {\n      name,\n      value\n    } = event.target;\n    setFormData(prevData => ({\n      ...prevData,\n      [name]: value\n    }));\n  };\n  const renderInputField = function (label, name) {\n    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"text\";\n    let disabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"row text-start mb-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n      htmlFor: name,\n      className: \"col-2 col-form-label\"\n    }, label, \":\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"col-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n      type: type,\n      className: \"form-control\",\n      id: name,\n      name: name,\n      value: formData[name],\n      onChange: handleChange,\n      disabled: gettingUserName !== 'digital_signature_admin' && gettingUserName === 'digital_signature_maker' && disabled\n    }), errors[name] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"small\", {\n      className: \"text-danger\"\n    }, errors[name])));\n  };\n  const renderTextAreaField = function (label, name) {\n    let disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"row text-start mb-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n      htmlFor: name,\n      className: \"col-2 col-form-label\"\n    }, label, \":\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"col-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"textarea\", {\n      className: \"form-control\",\n      id: name,\n      name: name,\n      value: formData[name],\n      onChange: handleChange,\n      disabled: gettingUserName !== 'digital_signature_admin' && gettingUserName === 'digital_signature_maker' && disabled\n      //style={{width: \"max-content\", minWidth: \"50%\"}}\n    }), errors[name] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"small\", {\n      className: \"text-danger\"\n    }, errors[name])));\n  };\n  const renderSelectField = function (label, name, options) {\n    let disabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"row text-start mb-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n      htmlFor: name,\n      className: \"col-2 col-form-label\"\n    }, label, \":\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      className: \"col-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"select\", {\n      className: \"form-select\",\n      id: name,\n      name: name,\n      value: formData[name],\n      style: {\n        width: \"max-content\",\n        minWidth: \"50%\"\n      },\n      disabled: gettingUserName !== 'digital_signature_admin' && gettingUserName === 'digital_signature_maker' && disabled,\n      onChange: handleChange\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"option\", {\n      value: \"\"\n    }, \"Select an option\"), options.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"option\", {\n      key: option,\n      value: option\n    }, option))), errors[name] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"small\", {\n      className: \"text-danger\"\n    }, errors[name])));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"section\", {\n    className: \"content-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"container-fluid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"row mb-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"col-sm-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, \"Create Memo\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"col-sm-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ol\", {\n    className: \"breadcrumb float-sm-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n    className: \"breadcrumb-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"a\", {\n    href: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n    className: \"breadcrumb-item active\"\n  }, \"Create Memo\")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"section\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"card mx-3 px-4 pt-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    className: \"form-group\",\n    onSubmit: handleSubmit\n  }, renderInputField(\"Title\", \"title\", \"text\", true), renderSelectField(\"Tipe Dokumen\", \"tipeDokumen\", [\"BAST\", \"Klaim Kesehatan\", \"PR PO\", \"Lain-lain\"]), renderInputField(\"Nomor\", \"nomor\"), renderSelectField(\"Requestor\", \"requestor\", options), renderInputField(\"Request Date\", \"requestDate\", \"date\"), renderInputField(\"Request Title\", \"requestTitle\"), renderTextAreaField(\"Request Detail\", \"requestDetail\"), renderInputField(\"Create Date\", \"createDate\", \"date\"), renderInputField(\"Due Date\", \"dueDate\", \"date\"), renderSelectField(\"Status Memo\", \"statusMemo\", [\"ON_PROGRESS\", \"PENDING\", \"REJECTED\", \"REWORK\", \"APPROVE_BY_APPROVAL1\", \"APPROVE_BY_APPROVAL2\"]), renderSelectField(\"User Maker\", \"userMaker\", options), renderTextAreaField(\"User Approval 1 Note\", \"userApproval1Note\", true), renderTextAreaField(\"User Approval 2 Note\", \"userApproval2Note\", true), renderSelectField(\"User Approval 1 Name\", \"userApproval1Name\", options), renderSelectField(\"User Approval 2 Name\", \"userApproval2Name\", options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"container d-flex justify-content-center mt-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"card\",\n    style: {\n      width: \"500px\",\n      maxWidth: \"50%\",\n      borderRadius: '20px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_drop_file_input_DropFileInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onFileChange: handleFileChange,\n    setFileError: setFileError,\n    uploadedFiles: uploadedFiles,\n    setUploadedFiles: setUploadedFiles,\n    fileError: fileError,\n    resetUploadedFiles: handleSubmit,\n    validateField: validateField,\n    fileList: fileList,\n    setFileList: setFileList\n  }), errors.file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"small\", {\n    className: \"text-danger\"\n  }, errors.file))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"mb-3 text-end p-5 d-flex text-end justify-content-end gap-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"btn btn-secondary\",\n    onClick: handleCancel\n  }, \"Reset\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    className: \"btn btn-primary\",\n    type: \"submit\"\n  }, \"Submit\")))))));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateMemo);\n\n//# sourceURL=webpack://new-module-grit-front-end/./src/Components/CreateMemo.js?");

/***/ })

}]);