<< ? javascript
$scope.a = {
        "skinName": "wdc",
        "title": "appName",
        "description": "UA SDI Exploration",
        "keywords": [""],
        "isPublished": true,
        "appWidgets": [{
            "type": "language-selector",
            "instanceName": "language-selector",
            "showFlags": true
        }, {
            "type": "page-list",
            "instanceName": "page-list-nav"
        }, {
            "instanceName": "AppTopbar",
            "type": "v2.topbar",
            "icon": "/widgets/v2.topbar/icon.png",
            "decoration": {
                "languageSelector": {
                    "enable": false,
                    "showFlag": true,
                    "showTitle": true
                },
                "loginButton": true,
                "gotoApps": true
            },
            "content": [{
                "key": "igcnsixcquybkd46hp6ekx1or",
                "title": "Methodology",
                "href": "/app/SDI/methodologyEN"
            }, {
                "key": "00ae3qd0nvc780txpepo9ftj4i",
                "title": "SDI UA 2014",
                "href": "/app/SDI/ua"
            }, {
                "key": "d79lcaysoqg51cjmzh0qnnrk9",
                "title": "SDI world profiles",
                "href": "/app/SDI/sdiprofiles"
            }, {
                "key": "dtmueyp2aqwmksnuxg4cwbqpvi",
                "title": "SDI 2015",
                "href": "/app/SDI/"
            }]
        }],
        "pages": [{
            "shortTitle": "About",
            "href": "about",
            "template": "1-col",
            "holders": {
                "column": {
                    "widgets": [{
                        "text": "<p><font size=\"6\">About App</font></p>",
                        "type": "htmlwidget",
                        "instanceName": "4dvg3sv7mjz1d83acqefnoecdi",
                        "icon": "/widgets/htmlwidget/icon.png"
                    }, {
                        "masterWidget": "",
                        "type": "app-info",
                        "instanceName": "zg5zqh9y4cejt53bhk9be29",
                        "icon": "/widgets/app-info/icon.png"
                    }],
                    "width": 1328
                }
            },
            "subscriptions": []
        }, {
            "shortTitle": "SDI level clusters",
            "href": "sdi_eur",
            "template": "left-right-bottom",
            "holders": {
                "column": {
                    "widgets": [{
                        "type": "v2.nvd3-line",
                        "instanceName": "k52u67zm1zpb5v1bi48izr529",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 650,
                            "title": "Dinamycs of Index of sustainable development for Europe",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "",
                            "yAxisName": "",
                            "staggerLabels": false,
                            "color": ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                            "interpolation": "cardinal",
                            "showLabels": false,
                            "width": 1328
                        },
                        "serieDataId": "57d412ddd9cf2f030097cbd9",
                        "queryID": "c9490d616b6b394de242c67a9b927293",
                        "dataID": "57d40eb6d9cf2f030097cbc2",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
                    }],
                    "width": 1318
                },
                "topleft": {
                    "widgets": [{
                        "type": "v2.table",
                        "instanceName": "9muyym5qo2wmwc8t7jo9wwmi",
                        "icon": "/widgets/v2.table/icon.png",
                        "decoration": {
                            "colorize": false,
                            "height": 450,
                            "opacity": 0.5,
                            "direction": "Columns",
                            "width": 659,
                            "color": ["#ffffcc", "#c2e699", "#78c679", "#238443"],
                            "scroll": true,
                            "title": "Clusterization by Index of sustanable development (2016) for Europe"
                        },
                        "dataID": "57d40ef1d9cf2f030097cbc7",
                        "queryID": "f6e802c8720db776b7f9cb9b6ee85001"
                    }, {
                        "type": "v2.nvd3-radar",
                        "instanceName": "4ef8re6425gas77foarnh1if6r",
                        "icon": "/widgets/v2.nvd3-radar/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Sustainable development indicators for cluster 1",
                            "subtitle": "Write Your Subtitle",
                            "caption": "Figure 1. Write Your Caption text.",
                            "isArea": false,
                            "color": ["#e6ab02", "#66a61e", "#e7298a", "#7570b3", "#d95f02", "#1b9e77"],
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 659,
                            "reversePalette": true
                        },
                        "serieDataId": "57d413a5d9cf2f030097cbde",
                        "queryID": "6c591fb142209831e0193a8b4b48c17b",
                        "dataID": "57d40fb5d9cf2f030097cbd0"
                    }],
                    "width": 654
                },
                "topright": {
                    "widgets": [{
                        "type": "v2.nvd3-geochart",
                        "instanceName": "zp0w7sipzdrfempx4dkj4i",
                        "icon": "/widgets/v2.nvd3-geochart/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Europe clusters by Index pf sustainable development",
                            "subtitle": "2015",
                            "caption": "Pic.1",
                            "color": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"],
                            "showLabels": true,
                            "showValues": false,
                            "showTiles": false,
                            "selectedTiles": "mapbox.outdoors",
                            "interactive": true,
                            "defaultFill": "#f0f0f0",
                            "defaultFillOpacity": 0,
                            "defaultStroke": "#909095",
                            "defaultStrokeWidth": 1,
                            "defaultStrokeOpacity": 0.75,
                            "selectedFillOpacity": "1",
                            "selectedStrokeWidth": 3,
                            "boundary": {
                                "scale": 3399.0523781509783,
                                "translate": [164.62750885464078, 823.6619368308221]
                            },
                            "width": 659,
                            "initialScope": true
                        },
                        "serieDataId": "57d41340d9cf2f030097cbda",
                        "queryID": "5dc9f5336a770a6d7c20a52a8b16adb8",
                        "dataID": "5785ede756b68203003252a9",
                        "direction": "Columns",
                        "dataIndex": [0],
                        "bins": 4,
                        "scope": "Europe"
                    }, {
                        "type": "v2.nvd3-chord",
                        "instanceName": "bajc2n9wbmj0x04ptp1d1jor",
                        "icon": "/widgets/v2.nvd3-chord/icon.png",
                        "decoration": {
                            "height": 550,
                            "title": "Correlation of Index of sustainable development",
                            "subtitle": "",
                            "caption": "",
                            "isArea": true,
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 659
                        },
                        "serieDataId": "57d413d0d9cf2f030097cbdf",
                        "queryID": "6512c7587efbaac9821b57b7e05c9519",
                        "dataID": "57d4122dd9cf2f030097cbd5"
                    }],
                    "width": 654
                },
                "bottom": {
                    "widgets": [{
                        "queries": [{
                            "$id": "e52025f63f779c74a3d343b41a6f5ca0",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "SDI dyn src",
                            "context": {
                                "query": {
                                    "commitID": "5742a642265d460300865b61",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Split Columns",
                                        "collection": ["Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Rows",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5742a856265d460300865b81"
                            }
                        }, {
                            "$id": "7f92c1c1ba6adca2f4661ceff05d4f97",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "SDI dyn",
                            "context": {
                                "queryResultId": "5742a87b265d460300865b84",
                                "script": [{
                                    "shortName": "Select SDI dyn src(5742a856265d460300865b81)",
                                    "select": {
                                        "source": "SDI dyn src"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "cb3c0dfef031a02ab01c1eda005f7673",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "SDI 4cls 2014",
                            "context": {
                                "queryResultId": "5742a9fd265d460300865b8d",
                                "script": [{
                                    "shortName": "Select SDI dyn(5742a87b265d460300865b84)",
                                    "select": {
                                        "source": "SDI dyn"
                                    }
                                }, {
                                    "shortName": "Start with 10 limit 1",
                                    "limit": {
                                        "enable": true,
                                        "start": 10,
                                        "length": 1
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Columns",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by 2014",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "0"
                                    }
                                }]
                            }
                        }, {
                            "$id": "5d33ba5d7347133a77f9a2495403091b",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "SDI 4cls 2014 table",
                            "context": {
                                "queryResultId": "5742abd2265d460300865b99",
                                "script": [{
                                    "shortName": "Select SDI 4cls 2014(5742a9fd265d460300865b8d)",
                                    "select": {
                                        "source": "SDI 4cls 2014"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "9df77e8b1bfd74e69ed95cba4cd03590",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "UA cluster 2014",
                            "context": {
                                "query": {
                                    "commitID": "5742ae04265d460300865b9a",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": ["MDA", "RUS", "UKR", "AZE", "BIH"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2014"]
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5742afa8265d460300865b9e"
                            }
                        }, {
                            "$id": "886a5676318edb754b7c8907c71b8885",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "corr",
                            "context": {
                                "queryResultId": "57443db41ebb2803007fa39a",
                                "script": [{
                                    "shortName": "Select SDI dyn(5742a87b265d460300865b84)",
                                    "select": {
                                        "source": "SDI dyn"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Correlations for Columns",
                                    "correlation": {
                                        "enable": true,
                                        "direction": "Columns"
                                    }
                                }]
                            }
                        }, {
                            "$id": "c55d9a2c7560006cdf712aa13087620d",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "corr 1",
                            "context": {
                                "queryResultId": "57443e411ebb2803007fa39e",
                                "script": [{
                                    "shortName": "Select corr(57443db41ebb2803007fa39a)",
                                    "select": {
                                        "source": "corr"
                                    }
                                }, {
                                    "shortName": "Use Row Metadata(Country)",
                                    "useRowMetadata": [true, false]
                                }, {
                                    "shortName": "Use Column Metadata(Country)",
                                    "useColumnMetadata": [true, false]
                                }]
                            }
                        }, {
                            "$id": "3f14d64500a1b5ec37bf70e6f0681564",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "SDI2105",
                            "context": {
                                "query": {
                                    "commitID": "5785e8a956b6820300325282",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Split Columns",
                                        "collection": ["Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Rows",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5785e90a56b6820300325286"
                            }
                        }, {
                            "$id": "e59019ab28c9224a150fb689630e0df7",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "SDI2015sort",
                            "context": {
                                "queryResultId": "5785e93656b6820300325289",
                                "script": [{
                                    "shortName": "Select SDI2105(5785e90a56b6820300325286)",
                                    "select": {
                                        "source": "SDI2105"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by Рік",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "51664619f5c6c8b6cf8c55fdde3383e2",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "SDIcls",
                            "context": {
                                "queryResultId": "5785ea3956b6820300325292",
                                "script": [{
                                    "shortName": "Select SDI2015sort(5785e93656b6820300325289)",
                                    "select": {
                                        "source": "SDI2015sort"
                                    }
                                }, {
                                    "shortName": "Start with 11 limit 1",
                                    "limit": {
                                        "enable": true,
                                        "start": 11,
                                        "length": 1
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Columns",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by 2015",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "0"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "f6274cb838ed0f2b23aeaf534be113b8",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "UAclust",
                            "context": {
                                "query": {
                                    "commitID": "5785e8a956b6820300325282",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": ["UKR", "TUR"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Ie", "Cql", "Csl", "Iec", "Is", "Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5785ec1556b6820300325295"
                            }
                        }, {
                            "$id": "b0e2a777c43fca7b1328b0dd6d746ad1",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "corr2015",
                            "context": {
                                "queryResultId": "5785ec9056b682030032529a",
                                "script": [{
                                    "shortName": "Select SDI2015sort(5785e93656b6820300325289)",
                                    "select": {
                                        "source": "SDI2015sort"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Країна",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Correlations for Columns",
                                    "correlation": {
                                        "enable": true,
                                        "direction": "Columns"
                                    }
                                }, {
                                    "shortName": "Use Row Metadata(Країна)",
                                    "useRowMetadata": [true, false]
                                }, {
                                    "shortName": "Use Column Metadata(Країна)",
                                    "useColumnMetadata": [true, false]
                                }]
                            }
                        }, {
                            "$id": "5dc9f5336a770a6d7c20a52a8b16adb8",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "ClsForMap2015",
                            "context": {
                                "queryResultId": "5785ede756b68203003252a9",
                                "script": [{
                                    "shortName": "Select SDI2015sort(5785e93656b6820300325289)",
                                    "select": {
                                        "source": "SDI2015sort"
                                    }
                                }, {
                                    "shortName": "Start with 11 limit 1",
                                    "limit": {
                                        "enable": true,
                                        "start": 11,
                                        "length": 1
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Columns",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by 2015",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "0"
                                    }
                                }]
                            }
                        }, {
                            "$id": "b3ab5574ad56c19e60c24b78bb76e98e",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "SDI2016",
                            "context": {
                                "query": {
                                    "commitID": "57d40b92d9cf2f030097cba5",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Split Columns",
                                        "collection": ["Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Rows",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d40c0fd9cf2f030097cbaa"
                            }
                        }, {
                            "$id": "c9490d616b6b394de242c67a9b927293",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "SDI2016sort",
                            "context": {
                                "queryResultId": "57d40eb6d9cf2f030097cbc2",
                                "script": [{
                                    "shortName": "Select SDI2016(57d40c0fd9cf2f030097cbaa)",
                                    "select": {
                                        "source": "SDI2016"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "f6e802c8720db776b7f9cb9b6ee85001",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "SDI2016clust",
                            "context": {
                                "queryResultId": "57d40ef1d9cf2f030097cbc7",
                                "script": [{
                                    "shortName": "Select SDI2016sort(57d40eb6d9cf2f030097cbc2)",
                                    "select": {
                                        "source": "SDI2016sort"
                                    }
                                }, {
                                    "shortName": "Start with 11 limit 1",
                                    "limit": {
                                        "enable": true,
                                        "start": 11,
                                        "length": 1
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Columns",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by 2015",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "0"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "6c591fb142209831e0193a8b4b48c17b",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "UAcluster2016",
                            "context": {
                                "query": {
                                    "commitID": "57d40b92d9cf2f030097cba5",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": ["TUR", "UKR"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Ie", "Cql", "Csl", "Iec", "Is", "Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d40fb5d9cf2f030097cbd0"
                            }
                        }, {
                            "$id": "6512c7587efbaac9821b57b7e05c9519",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "corr2016",
                            "context": {
                                "queryResultId": "57d4122dd9cf2f030097cbd5",
                                "script": [{
                                    "shortName": "Select SDI2016sort(57d40eb6d9cf2f030097cbc2)",
                                    "select": {
                                        "source": "SDI2016sort"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Correlations for Columns",
                                    "correlation": {
                                        "enable": true,
                                        "direction": "Columns"
                                    }
                                }, {
                                    "shortName": "Use Row Metadata(Country)",
                                    "useRowMetadata": [true, false]
                                }, {
                                    "shortName": "Use Column Metadata(Country)",
                                    "useColumnMetadata": [true, false]
                                }]
                            }
                        }],
                        "type": "v2.query-manager",
                        "instanceName": "uy94yhhb9104monji1m75vcxr",
                        "icon": "/widgets/v2.query-manager/icon.png"
                    }],
                    "width": 1318
                }
            },
            "subscriptions": []
        }, {
            "shortTitle": "CQL clustering",
            "href": "cql_clusters",
            "template": "left-right-bottom",
            "holders": {
                "column": {
                    "widgets": [],
                    "width": 1318
                },
                "topleft": {
                    "widgets": [{
                        "type": "v2.table",
                        "instanceName": "szza5esy75pk8u54xrxgk3xr",
                        "icon": "/widgets/v2.table/icon.png",
                        "decoration": {
                            "colorize": false,
                            "height": 450,
                            "opacity": 0.5,
                            "direction": "Rows",
                            "width": 659,
                            "scroll": true,
                            "title": "Clusters by components of life quality for Europe",
                            "subtitle": "2015"
                        },
                        "dataID": "57d41b40d9cf2f030097cbfe",
                        "queryID": "d206a69a9319ff44c5464f6c0869fe93"
                    }, {
                        "type": "v2.nvd3-bar-h",
                        "instanceName": "9fpnpvxvk9hdxx41eqjrio1or",
                        "icon": "/widgets/v2.nvd3-bar-h/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Structure of Quality life component for cluster 4",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "",
                            "yAxisName": "",
                            "color": ["#1b9e77", "#d95f02", "#7570b3", "#e7298a"],
                            "showControls": true,
                            "stacked": false,
                            "width": 659,
                            "reversePalette": false
                        },
                        "serieDataId": "57d4200fd9cf2f030097cc22",
                        "queryID": "514456c0b30bedaf5806cdf49077be75",
                        "dataID": "57d41fefd9cf2f030097cc1e"
                    }],
                    "width": 654
                },
                "topright": {
                    "widgets": [{
                        "type": "v2.nvd3-geochart",
                        "instanceName": "2g8hkw646u9c76lezu6p3nmi",
                        "icon": "/widgets/v2.nvd3-geochart/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Components of life quality for Europe",
                            "subtitle": "2015р.",
                            "caption": "",
                            "color": ["#d7191c", "#fdae61", "#a6d96a", "#1a9641"],
                            "showLabels": false,
                            "showValues": false,
                            "showTiles": true,
                            "selectedTiles": "mapbox.outdoors",
                            "interactive": true,
                            "defaultFill": "#f0f0f0",
                            "defaultFillOpacity": 0,
                            "defaultStroke": "#909095",
                            "defaultStrokeWidth": 1,
                            "defaultStrokeOpacity": "0.5",
                            "selectedFillOpacity": "0.5",
                            "selectedStrokeWidth": 3,
                            "boundary": {
                                "scale": 2959.046962472365,
                                "translate": [159.61910598497087, 734.3169027027611]
                            },
                            "width": 654,
                            "reversePalette": true,
                            "initialScope": true
                        },
                        "serieDataId": "58047081f719940300266878",
                        "queryID": "1ff93c438357265733b0670c900b2953",
                        "dataID": "57d41980d9cf2f030097cbe9",
                        "direction": "Rows",
                        "dataIndex": [0, 1, 2],
                        "bins": 4,
                        "scope": "none"
                    }, {
                        "type": "v2.nvd3-radar",
                        "instanceName": "gh6gy1i867nl67p7n0bl6jemi",
                        "icon": "/widgets/v2.nvd3-radar/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Structure of Quality life component for cluster 4",
                            "subtitle": "Write Your Subtitle",
                            "caption": "Figure 1. Write Your Caption text.",
                            "isArea": false,
                            "color": ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 659
                        },
                        "serieDataId": "57d41f92d9cf2f030097cc19",
                        "queryID": "e1be04d0b224d03f663e1f322ece66c7",
                        "dataID": "57d41f77d9cf2f030097cc17"
                    }],
                    "width": 654
                },
                "bottom": {
                    "widgets": [{
                        "type": "v2.nvd3-line",
                        "instanceName": "gbcchdm0q570y11eariugcik9",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Dynamics of Quality of life component for cluster 3",
                            "subtitle": "",
                            "caption": ".",
                            "xAxisName": "",
                            "yAxisName": "",
                            "staggerLabels": false,
                            "color": ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"],
                            "interpolation": "cardinal",
                            "showLabels": false,
                            "width": 1328
                        },
                        "serieDataId": "57d420f5d9cf2f030097cc31",
                        "queryID": "96108da94089087c12862e2640919d67",
                        "dataID": "57d420ccd9cf2f030097cc2e",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6]
                    }, {
                        "type": "v2.query-manager",
                        "instanceName": "4vbf2i3dqfbcqpkwjm0ksxlxr",
                        "icon": "/widgets/v2.query-manager/icon.png",
                        "queries": [{
                            "$id": "f51760af0f90809273d707b82bdc3a15",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Cql componemts 2014 src",
                            "context": {
                                "query": {
                                    "commitID": "5742ae04265d460300865b9a",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Is", "Iec", "Ie"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2014"]
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5742b5f1265d460300865ba8"
                            }
                        }, {
                            "$id": "220f781762aa608f1fa3f236325b20d0",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CqlComponents 2014",
                            "context": {
                                "queryResultId": "5742b605265d460300865baa",
                                "script": [{
                                    "shortName": "Select Cql componemts 2014 src(5742b5f1265d460300865ba8)",
                                    "select": {
                                        "source": "Cql componemts 2014 src"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "3e34f8eb5819f118f9df59fdecbbccd7",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CQL 4 clusters 2014",
                            "context": {
                                "queryResultId": "5742bbcb265d460300865bbc",
                                "script": [{
                                    "shortName": "Select Cql componemts 2014 src(5742b5f1265d460300865ba8)",
                                    "select": {
                                        "source": "Cql componemts 2014 src"
                                    }
                                }, {
                                    "shortName": "PCA (Scores) from Rows",
                                    "pca": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "result": "Scores"
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "3"
                                    }
                                }]
                            }
                        }, {
                            "$id": "fe48dc55880024cfe0e1bd5cc99dce56",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "only cls index",
                            "context": {
                                "queryResultId": "5742bd7d265d460300865bcd",
                                "script": [{
                                    "shortName": "Select CQL 4 clusters 2014(5742bbcb265d460300865bbc)",
                                    "select": {
                                        "source": "CQL 4 clusters 2014"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }, {
                                    "shortName": "Start with 4 limit 1",
                                    "limit": {
                                        "enable": true,
                                        "start": 4,
                                        "length": 1
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "1c9bf311bd9a59c20a04cf8165fa2e39",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "join",
                            "context": {
                                "queryResultId": "5742bda9265d460300865bcf"
                            }
                        }, {
                            "$id": "606b8ae1cb43aad30aa0e5d460c89d12",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "Cql clusters table",
                            "context": {
                                "queryResultId": "5742bdd3265d460300865bd1",
                                "script": [{
                                    "shortName": "Select join(5742bda9265d460300865bcf)",
                                    "select": {
                                        "source": "join"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "3"
                                    }
                                }]
                            }
                        }, {
                            "$id": "0f362b78fabbbbc4f8c88c13dc9e56d0",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "cls table1",
                            "context": {
                                "queryResultId": "5742be01265d460300865bd3",
                                "script": [{
                                    "shortName": "Select Cql clusters table(5742bdd3265d460300865bd1)",
                                    "select": {
                                        "source": "Cql clusters table"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "35b6802caddd88a6b06580894fe31619",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "Ua cluster",
                            "context": {
                                "queryResultId": "5742bec3265d460300865bd5",
                                "script": [{
                                    "shortName": "Select cls table1(5742be01265d460300865bd3)",
                                    "select": {
                                        "source": "cls table1"
                                    }
                                }, {
                                    "shortName": "Start with 1 limit 6",
                                    "limit": {
                                        "enable": true,
                                        "start": 1,
                                        "length": 6
                                    }
                                }]
                            }
                        }, {
                            "$id": "d04a77b7c7c291e75a645f5b4e53b0f2",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "Ua cluster bar",
                            "context": {
                                "queryResultId": "5742bf18265d460300865bdb",
                                "script": [{
                                    "shortName": "Select Ua cluster(5742bec3265d460300865bd5)",
                                    "select": {
                                        "source": "Ua cluster"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }, {
                                    "shortName": "Start with 1 limit 3",
                                    "limit": {
                                        "enable": true,
                                        "start": 1,
                                        "length": 3
                                    }
                                }]
                            }
                        }, {
                            "$id": "035ca3bcf73276072c10e53ff4f51cc7",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "ua CLUSTER radar",
                            "context": {
                                "queryResultId": "5742bfb6265d460300865bdf",
                                "script": [{
                                    "shortName": "Select Ua cluster bar(5742bf18265d460300865bdb)",
                                    "select": {
                                        "source": "Ua cluster bar"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "e3d887a0f64067f3281668c1f8b2884f",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Cql dyn src",
                            "context": {
                                "query": {
                                    "commitID": "5742ae04265d460300865b9a",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Columns",
                                        "collection": ["MDA", "ROU", "TUR", "UKR", "BIH", "GEO"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Split Columns",
                                        "collection": ["Cql"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Rows",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5743fe232e2b2c0300e7c491"
                            }
                        }, {
                            "$id": "7c4efc6e4efec98fbe0e22bc1ff64d72",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CQL dyn",
                            "context": {
                                "queryResultId": "5743fe452e2b2c0300e7c494",
                                "script": [{
                                    "shortName": "Select Cql dyn src(5743fe232e2b2c0300e7c491)",
                                    "select": {
                                        "source": "Cql dyn src"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by Рік",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "298434ff51b92b0a26eaa96d9ef3dca2",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CQLcomp2015",
                            "context": {
                                "query": {
                                    "commitID": "5785e8a956b6820300325282",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Ie", "Iec", "Is"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5785eebe56b68203003252b0"
                            }
                        }, {
                            "$id": "cb75540ce239b3ccd27f642b04db0316",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CQLcomp2015form",
                            "context": {
                                "queryResultId": "5785eee756b68203003252b2",
                                "script": [{
                                    "shortName": "Select CQLcomp2015(5785eebe56b68203003252b0)",
                                    "select": {
                                        "source": "CQLcomp2015"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "80b4e4aa9ad0c425a9a4f4a3717a0d30",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CQL 4 clust 2015",
                            "context": {
                                "queryResultId": "5785ef2a56b68203003252b6",
                                "script": [{
                                    "shortName": "Select CQLcomp2015(5785eebe56b68203003252b0)",
                                    "select": {
                                        "source": "CQLcomp2015"
                                    }
                                }, {
                                    "shortName": "PCA (Scores) from Rows",
                                    "pca": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "result": "Scores"
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "3"
                                    }
                                }]
                            }
                        }, {
                            "$id": "5906be175fa033b238e75ebe35bf2db3",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "only cls 2015",
                            "context": {
                                "queryResultId": "5785ef6556b68203003252ba",
                                "script": [{
                                    "shortName": "Select CQL 4 clust 2015(5785ef2a56b68203003252b6)",
                                    "select": {
                                        "source": "CQL 4 clust 2015"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }, {
                                    "shortName": "Start with 4 limit 1",
                                    "limit": {
                                        "enable": true,
                                        "start": 4,
                                        "length": 1
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "dd3042acb7d4bbfe2b4c679c98b0c39f",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "join2015",
                            "context": {
                                "queryResultId": "5785f00056b68203003252be"
                            }
                        }, {
                            "$id": "338e44b0f4e45c376f91e44066acbc7f",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "lastcls2015",
                            "context": {
                                "queryResultId": "5785f03956b68203003252c1",
                                "script": [{
                                    "shortName": "Select join2015(5785f00056b68203003252be)",
                                    "select": {
                                        "source": "join2015"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "3"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "3110ae528b2ca120fcb6687568eca709",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "UAclust2015",
                            "context": {
                                "queryResultId": "5785f0a456b68203003252c3",
                                "script": [{
                                    "shortName": "Select lastcls2015(5785f03956b68203003252c1)",
                                    "select": {
                                        "source": "lastcls2015"
                                    }
                                }, {
                                    "shortName": "Start with 20 limit 8",
                                    "limit": {
                                        "enable": true,
                                        "start": 20,
                                        "length": 8
                                    }
                                }]
                            }
                        }, {
                            "$id": "c55885bdcb1a5f2d870a86b607ef59c5",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "UAclust2015radar",
                            "context": {
                                "queryResultId": "5785f0f156b68203003252c6",
                                "script": [{
                                    "shortName": "Select UAclust2015(5785f0a456b68203003252c3)",
                                    "select": {
                                        "source": "UAclust2015"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }, {
                                    "shortName": "Start with 1 limit 3",
                                    "limit": {
                                        "enable": true,
                                        "start": 1,
                                        "length": 3
                                    }
                                }]
                            }
                        }, {
                            "$id": "88e7e55d341516563dcf01f3a85706ec",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CqlDyn2015",
                            "context": {
                                "query": {
                                    "commitID": "5785e8a956b6820300325282",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Split Columns",
                                        "collection": ["Cql"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Rows",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5785f13656b68203003252c8"
                            }
                        }, {
                            "$id": "7a100e38010cfd1f6c32ae2df6418c64",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CqlDyn2015obr",
                            "context": {
                                "queryResultId": "5785f18f56b68203003252cc",
                                "script": [{
                                    "shortName": "Select CqlDyn2015(5785f13656b68203003252c8)",
                                    "select": {
                                        "source": "CqlDyn2015"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by Рік",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "3b84c4b7f652359810ceac9bd12d63b3",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "UAclust2015radar2",
                            "context": {
                                "queryResultId": "5785f21b56b68203003252d1",
                                "script": [{
                                    "shortName": "Select UAclust2015radar(5785f0f156b68203003252c6)",
                                    "select": {
                                        "source": "UAclust2015radar"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "3e466f9d1b64c5b89d08bceb4acff8ab",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CQLclsDyn2015",
                            "context": {
                                "query": {
                                    "commitID": "5785e8a956b6820300325282",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Columns",
                                        "collection": ["ALB", "LTU", "GEO", "MDA", "UKR", "ROU", "BIH"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Split Columns",
                                        "collection": ["Cql"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Rows",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5785f39156b68203003252e0"
                            }
                        }, {
                            "$id": "eca621d4e5094408355ded5fad7c1c13",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "cql2015dyn",
                            "context": {
                                "queryResultId": "5785f3ba56b68203003252e2",
                                "script": [{
                                    "shortName": "Select CQLclsDyn2015(5785f39156b68203003252e0)",
                                    "select": {
                                        "source": "CQLclsDyn2015"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Рік",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "65d490898ad67e6b1bf2211ec31796a7",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "Hz",
                            "context": {
                                "queryResultId": "5785f3f956b68203003252e6",
                                "script": [{
                                    "shortName": "Select cql2015dyn(5785f3ba56b68203003252e2)",
                                    "select": {
                                        "source": "cql2015dyn"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "17b54c5fbb450331efd9a240a5c46830",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "2016src",
                            "context": {
                                "query": {
                                    "commitID": "57d40b92d9cf2f030097cba5",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Ie", "Iec", "Is"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Ignore",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d4191bd9cf2f030097cbe7"
                            }
                        }, {
                            "$id": "1ff93c438357265733b0670c900b2953",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016form",
                            "context": {
                                "queryResultId": "57d41980d9cf2f030097cbe9",
                                "script": [{
                                    "shortName": "Select 2016src(57d4191bd9cf2f030097cbe7)",
                                    "select": {
                                        "source": "2016src"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "0c4a27c2e01fd7e5124fc17c2eec717f",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016corrcls",
                            "context": {
                                "queryResultId": "57d41ae8d9cf2f030097cbfa",
                                "script": [{
                                    "shortName": "Select 2016src(57d4191bd9cf2f030097cbe7)",
                                    "select": {
                                        "source": "2016src"
                                    }
                                }, {
                                    "shortName": "PCA (Scores) from Rows",
                                    "pca": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "result": "Scores"
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }, {
                                    "shortName": "Start with 4 limit 1",
                                    "limit": {
                                        "enable": true,
                                        "start": 4,
                                        "length": 1
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "e3a91eaa2f13d2070dbc8eebdf91e3fd",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016join",
                            "context": {
                                "queryResultId": "57d41b16d9cf2f030097cbfc"
                            }
                        }, {
                            "$id": "d206a69a9319ff44c5464f6c0869fe93",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016clsTable",
                            "context": {
                                "queryResultId": "57d41b40d9cf2f030097cbfe",
                                "script": [{
                                    "shortName": "Select 2016join(57d41b16d9cf2f030097cbfc)",
                                    "select": {
                                        "source": "2016join"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "3"
                                    }
                                }]
                            }
                        }, {
                            "$id": "bbdb259eedb5c2640f0b4fe3a63ceeeb",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016UAclust",
                            "context": {
                                "queryResultId": "57d41f2ed9cf2f030097cc11",
                                "script": [{
                                    "shortName": "Select 2016clsTable(57d41b40d9cf2f030097cbfe)",
                                    "select": {
                                        "source": "2016clsTable"
                                    }
                                }, {
                                    "shortName": "Start with 34 limit 7",
                                    "limit": {
                                        "enable": true,
                                        "start": 34,
                                        "length": 7
                                    }
                                }]
                            }
                        }, {
                            "$id": "e1be04d0b224d03f663e1f322ece66c7",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016forcharts",
                            "context": {
                                "queryResultId": "57d41f77d9cf2f030097cc17",
                                "script": [{
                                    "shortName": "Select 2016UAclust(57d41f2ed9cf2f030097cc11)",
                                    "select": {
                                        "source": "2016UAclust"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }, {
                                    "shortName": "Start with 1 limit 3",
                                    "limit": {
                                        "enable": true,
                                        "start": 1,
                                        "length": 3
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "514456c0b30bedaf5806cdf49077be75",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016radar",
                            "context": {
                                "queryResultId": "57d41fefd9cf2f030097cc1e",
                                "script": [{
                                    "shortName": "Select 2016forcharts(57d41f77d9cf2f030097cc17)",
                                    "select": {
                                        "source": "2016forcharts"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "39c5dd4d9978a82e9f447056aec8507c",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "2016cql",
                            "context": {
                                "query": {
                                    "commitID": "57d40b92d9cf2f030097cba5",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Columns",
                                        "collection": ["ALB", "BIH", "GEO", "MDA", "ROU", "TUR", "UKR"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Ignore",
                                        "collection": ["Cql"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Rows",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d420abd9cf2f030097cc2a"
                            }
                        }, {
                            "$id": "96108da94089087c12862e2640919d67",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016cqlGr",
                            "context": {
                                "queryResultId": "57d420ccd9cf2f030097cc2e",
                                "script": [{
                                    "shortName": "Select 2016cql(57d420abd9cf2f030097cc2a)",
                                    "select": {
                                        "source": "2016cql"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }]
                    }],
                    "width": 1318
                }
            },
            "subscriptions": []
        }, {
            "shortTitle": "Csl clustering",
            "href": "Csl_clustering",
            "template": "left-right-bottom",
            "holders": {
                "column": {
                    "widgets": [],
                    "width": 1328
                },
                "topleft": {
                    "widgets": [{
                        "type": "v2.table",
                        "instanceName": "yaj8k1lhuuxm4pufo1kh85mi",
                        "icon": "/widgets/v2.table/icon.png",
                        "decoration": {
                            "colorize": false,
                            "height": 480,
                            "opacity": 0.5,
                            "direction": "Rows",
                            "width": 659,
                            "scroll": true,
                            "title": "Clusters by Security of life component for Europe"
                        },
                        "dataID": "57d4220bd9cf2f030097cc37",
                        "queryID": "d4a4bbbfc0efabb8e69ba934ef7c3553"
                    }, {
                        "type": "v2.data-selector",
                        "instanceName": "s",
                        "icon": "/widgets/v2.data-selector/icon.png",
                        "decoration": {
                            "direction": "Rows",
                            "meta": {
                                "key": "Країна",
                                "index": 0
                            },
                            "view": "Grid"
                        },
                        "queryID": "131d57ce409eecb026d07071a54a7578",
                        "dataID": "57d42274d9cf2f030097cc3d"
                    }],
                    "width": 659
                },
                "topright": {
                    "widgets": [{
                        "type": "v2.nvd3-geochart",
                        "instanceName": "gxbipyovr8o968gd3aowp14i",
                        "icon": "/widgets/v2.nvd3-geochart/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Security of life component",
                            "subtitle": "2015",
                            "caption": "",
                            "color": ["#d7191c", "#fdae61", "#abdda4", "#2b83ba"],
                            "showLabels": true,
                            "showValues": false,
                            "showTiles": false,
                            "selectedTiles": "mapbox.outdoors",
                            "interactive": true,
                            "defaultFill": "#f0f0f0",
                            "defaultFillOpacity": 0,
                            "defaultStroke": "#909095",
                            "defaultStrokeWidth": 1,
                            "defaultStrokeOpacity": 0.75,
                            "selectedFillOpacity": "1",
                            "selectedStrokeWidth": 3,
                            "boundary": {
                                "scale": 4485.076502101638,
                                "translate": [74.92421213595856, 962.3829523587427]
                            },
                            "width": 659,
                            "reversePalette": false,
                            "initialScope": true
                        },
                        "serieDataId": "57d42301d9cf2f030097cc44",
                        "queryID": "d4a4bbbfc0efabb8e69ba934ef7c3553",
                        "dataID": "57d4220bd9cf2f030097cc37",
                        "direction": "Rows",
                        "dataIndex": [1],
                        "bins": 4,
                        "scope": "Europe"
                    }, {
                        "type": "v2.nvd3-radar",
                        "instanceName": "00cssrw6vdavoxtc0v0q55ewmi",
                        "icon": "/widgets/v2.nvd3-radar/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Threats",
                            "subtitle": "Write Your Subtitle",
                            "caption": "Figure 1. Write Your Caption text.",
                            "isArea": false,
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 659,
                            "enableEmitEvents": false
                        },
                        "serieDataId": "57d422a3d9cf2f030097cc40",
                        "queryID": "131d57ce409eecb026d07071a54a7578",
                        "dataID": "57d42274d9cf2f030097cc3d",
                        "emitters": "s.selectObject.selectSerie"
                    }],
                    "width": 659
                },
                "bottom": {
                    "widgets": [{
                        "type": "v2.query-manager",
                        "instanceName": "9uwmyh7b9coitnpzw7mgnl8fr",
                        "icon": "/widgets/v2.query-manager/icon.png",
                        "queries": [{
                            "$id": "57a10fdafd8ae532f2a9392867df2125",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "csl src 2014",
                            "context": {
                                "query": {
                                    "commitID": "5742ae04265d460300865b9a",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Csl"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2014"]
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "574434931ebb2803007fa378"
                            }
                        }, {
                            "$id": "42d890f5f08f53c2349c516066399422",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "csl clusters table",
                            "context": {
                                "queryResultId": "574434f11ebb2803007fa37c",
                                "script": [{
                                    "shortName": "Select csl src 2014(574434931ebb2803007fa378)",
                                    "select": {
                                        "source": "csl src 2014"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by .Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "c85e183f0c69ff107f169a728fe7186b",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "cl 1 csl",
                            "context": {
                                "queryResultId": "574437e71ebb2803007fa388",
                                "script": [{
                                    "shortName": "Select csl clusters table(574434f11ebb2803007fa37c)",
                                    "select": {
                                        "source": "csl clusters table"
                                    }
                                }, {
                                    "shortName": "Start with 1 limit 13",
                                    "limit": {
                                        "enable": true,
                                        "start": 1,
                                        "length": 13
                                    }
                                }]
                            }
                        }, {
                            "$id": "289966a4f3a25801270d2bb2cae32dac",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "threats",
                            "context": {
                                "query": {
                                    "commitID": "574571cf73894a03005badc4",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5745727973894a03005badca"
                            }
                        }, {
                            "$id": "511469661e3a618fc2863acb2d5aec1d",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "all t table",
                            "context": {
                                "queryResultId": "574572e373894a03005badcf",
                                "script": [{
                                    "shortName": "Select threats(5745727973894a03005badca)",
                                    "select": {
                                        "source": "threats"
                                    }
                                }, {
                                    "shortName": "Number precision: 1",
                                    "precision": 1
                                }, {
                                    "shortName": "Sort Rows A-Z order by Країна",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Показник",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Рік",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-2"
                                    }
                                }]
                            }
                        }, {
                            "$id": "d8248a59c6643fc9ec22770d7f51ee47",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "tt",
                            "context": {
                                "queryResultId": "5745736b73894a03005badd1",
                                "script": [{
                                    "shortName": "Select all t table(574572e373894a03005badcf)",
                                    "select": {
                                        "source": "all t table"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Показник",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "83614c49ccd34d064038b7fa3cc23708",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "t2014src",
                            "context": {
                                "query": {
                                    "commitID": "574c0179f40d0903002db6d2",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2014"]
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "574c0305f40d0903002db6d7"
                            }
                        }, {
                            "$id": "9ffd31e962e42e0f3a716570b11d2ed7",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "t 2014",
                            "context": {
                                "queryResultId": "574c034bf40d0903002db6db",
                                "script": [{
                                    "shortName": "Select t2014src(574c0305f40d0903002db6d7)",
                                    "select": {
                                        "source": "t2014src"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by Країна",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Показник",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "ca9c6782b1845daed7de50bd422ebaf2",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "t2015",
                            "context": {
                                "query": {
                                    "commitID": "5785e8a956b6820300325282",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["BBP", "CM5", "CP", "ESB", "GDI", "GWK", "CI", "NDI", "NI", "PWA", "WBGINI", "WBSF"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5785f57956b68203003252f0"
                            }
                        }, {
                            "$id": "330f4ca3a22fecc578d203025f6ac1b4",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "t2015obr",
                            "context": {
                                "queryResultId": "5785f5b956b68203003252f7",
                                "script": [{
                                    "shortName": "Select t2015(5785f57956b68203003252f0)",
                                    "select": {
                                        "source": "t2015"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by Країна",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Показник",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "c60a4bd88b04cd2f2e67e00d34de3993",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "cls2015",
                            "context": {
                                "query": {
                                    "commitID": "5785e8a956b6820300325282",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Csl"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5785f64956b68203003252fa"
                            }
                        }, {
                            "$id": "3e4bccf6b515f015b543b9bdcdd1ebb4",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "clstable2015",
                            "context": {
                                "queryResultId": "5785fa1256b68203003252fe",
                                "script": [{
                                    "shortName": "Select cls2015(5785f64956b68203003252fa)",
                                    "select": {
                                        "source": "cls2015"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by .Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "74a6e8f1f2ffcd8a710211b90004786f",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "2016csl",
                            "context": {
                                "query": {
                                    "commitID": "57d40b92d9cf2f030097cba5",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Csl"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Ignore",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d421afd9cf2f030097cc33"
                            }
                        }, {
                            "$id": "d4a4bbbfc0efabb8e69ba934ef7c3553",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016cslR",
                            "context": {
                                "queryResultId": "57d4220bd9cf2f030097cc37",
                                "script": [{
                                    "shortName": "Select 2016csl(57d421afd9cf2f030097cc33)",
                                    "select": {
                                        "source": "2016csl"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "ffb51f98dbffcd210faff937d8b6ab05",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "2016all",
                            "context": {
                                "query": {
                                    "commitID": "57d40b92d9cf2f030097cba5",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["BBP", "CM5", "CP", "ESB", "GDI", "GWK", "CI", "NDI", "NI", "PWA", "WBGINI", "WBSF"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Ignore",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d42250d9cf2f030097cc39"
                            }
                        }, {
                            "$id": "131d57ce409eecb026d07071a54a7578",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "2016graph",
                            "context": {
                                "queryResultId": "57d42274d9cf2f030097cc3d",
                                "script": [{
                                    "shortName": "Select 2016all(57d42250d9cf2f030097cc39)",
                                    "select": {
                                        "source": "2016all"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Indicator",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }]
                    }],
                    "width": 1328
                }
            },
            "subscriptions": [{
                "emitter": "s",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "00cssrw6vdavoxtc0v0q55ewmi"
            }]
        }, {
            "shortTitle": "UA Oblast Profiles",
            "href": "ua",
            "template": "2(3x9)-cols",
            "holders": {
                "column": {
                    "widgets": [],
                    "width": 1200
                },
                "topleft": {
                    "widgets": [{
                        "type": "v2.data-selector",
                        "instanceName": "selector",
                        "icon": "/widgets/v2.data-selector/icon.png",
                        "decoration": {
                            "direction": "Rows",
                            "meta": {
                                "key": "Область",
                                "index": 0
                            },
                            "view": "Grid"
                        },
                        "queryID": "0a1003c63cfc2052ed636550771c406d",
                        "dataID": "5827507392a35f04008e24df"
                    }],
                    "width": 320
                },
                "topright": {
                    "widgets": [{
                        "type": "v2.nvd3-geochart",
                        "instanceName": "6k2kc8qodfiokdt1l6ysulq5mi",
                        "icon": "/widgets/v2.nvd3-geochart/icon.png",
                        "decoration": {
                            "height": 350,
                            "title": "Compoment of quality of human life for Ukraine's regions",
                            "subtitle": "2014",
                            "caption": "",
                            "color": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"],
                            "showLabels": false,
                            "showValues": false,
                            "showTiles": true,
                            "selectedTiles": "mapbox.light",
                            "interactive": true,
                            "defaultFill": "#f0f0f0",
                            "defaultFillOpacity": 0,
                            "defaultStroke": "#909095",
                            "defaultStrokeWidth": 1,
                            "defaultStrokeOpacity": 0.75,
                            "selectedFillOpacity": "1",
                            "selectedStrokeWidth": 3,
                            "boundary": {},
                            "width": 999
                        },
                        "serieDataId": "5827509992a35f04008e24e0",
                        "queryID": "0a1003c63cfc2052ed636550771c406d",
                        "dataID": "5827507392a35f04008e24df",
                        "direction": "Rows",
                        "dataIndex": [3],
                        "bins": 4,
                        "scope": "none",
                        "emitters": "selector.selectObject.selectObject"
                    }, {
                        "type": "v2.nvd3-geochart",
                        "instanceName": "vx417ltllilhxzhmpjru23xr",
                        "icon": "/widgets/v2.nvd3-geochart/icon.png",
                        "decoration": {
                            "height": 350,
                            "title": "Compoment of security of human life for Ukraine's regions",
                            "subtitle": "2014р.",
                            "caption": "",
                            "color": ["#d7191c", "#fdae61", "#a6d96a", "#1a9641"],
                            "showLabels": false,
                            "showValues": false,
                            "showTiles": true,
                            "selectedTiles": "mapbox.light",
                            "interactive": true,
                            "defaultFill": "#f0f0f0",
                            "defaultFillOpacity": 0,
                            "defaultStroke": "#909095",
                            "defaultStrokeWidth": 1,
                            "defaultStrokeOpacity": 0.75,
                            "selectedFillOpacity": "1",
                            "selectedStrokeWidth": 3,
                            "boundary": {},
                            "width": 999
                        },
                        "serieDataId": "5827517092a35f04008e24e8",
                        "queryID": "1999f2c3319a2e7a3d037d3fe7cf6116",
                        "dataID": "5827512792a35f04008e24e6",
                        "direction": "Rows",
                        "dataIndex": [9],
                        "bins": 4,
                        "scope": "none",
                        "emitters": "selector.selectObject.selectObject"
                    }, {
                        "type": "v2.nvd3-geochart",
                        "instanceName": "lig1svb34031a1vuyaj6y9zfr",
                        "icon": "/widgets/v2.nvd3-geochart/icon.png",
                        "decoration": {
                            "height": 350,
                            "title": "Index of sustainable development for Ukraine's regions",
                            "subtitle": "2014р.",
                            "caption": "",
                            "color": ["#d73027", "#fc8d59", "#fee08b", "#ffffbf", "#d9ef8b", "#91cf60", "#1a9850"],
                            "showLabels": false,
                            "showValues": false,
                            "showTiles": true,
                            "selectedTiles": "mapbox.light",
                            "interactive": true,
                            "defaultFill": "#f0f0f0",
                            "defaultFillOpacity": 0,
                            "defaultStroke": "#909095",
                            "defaultStrokeWidth": 1,
                            "defaultStrokeOpacity": 0.75,
                            "selectedFillOpacity": "1",
                            "selectedStrokeWidth": 3,
                            "boundary": {},
                            "width": 999,
                            "enableEmitEvents": false
                        },
                        "serieDataId": "5827519a92a35f04008e24ea",
                        "queryID": "1999f2c3319a2e7a3d037d3fe7cf6116",
                        "dataID": "5827512792a35f04008e24e6",
                        "direction": "Rows",
                        "dataIndex": [10],
                        "bins": 7,
                        "scope": "none",
                        "emitters": "selector.selectObject.selectObject"
                    }, {
                        "type": "v2.nvd3-radar",
                        "instanceName": "56h77ggw7z832phxtlpszl4n29",
                        "icon": "/widgets/v2.nvd3-radar/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Sustainable development indicators",
                            "subtitle": "",
                            "caption": "",
                            "isArea": false,
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 999
                        },
                        "serieDataId": "5827567892a35f04008e24fe",
                        "queryID": "1fba497cb07c44d49c22c2ba7f41ecdc",
                        "dataID": "5827562792a35f04008e24f9",
                        "emitters": "selector.selectObject.selectSerie"
                    }, {
                        "type": "v2.nvd3-geochart",
                        "instanceName": "0fgge0jjlnuzt67i9pgl7syvi",
                        "icon": "/widgets/v2.nvd3-geochart/icon.png",
                        "decoration": {
                            "height": 600,
                            "title": "Threats",
                            "subtitle": "2014р.",
                            "caption": "",
                            "color": ["#1a9641", "#a6d96a", "#fdae61", "#d7191c"],
                            "showLabels": false,
                            "showValues": false,
                            "showTiles": true,
                            "selectedTiles": "mapbox.light",
                            "interactive": true,
                            "defaultFill": "#f0f0f0",
                            "defaultFillOpacity": 0,
                            "defaultStroke": "#909095",
                            "defaultStrokeWidth": 1,
                            "defaultStrokeOpacity": 0.75,
                            "selectedFillOpacity": "1",
                            "selectedStrokeWidth": 3,
                            "boundary": {
                                "scale": 12439.137927217891,
                                "translate": [-582.8291760148929, 2149.8042966813755]
                            },
                            "width": 999,
                            "reversePalette": false,
                            "initialScope": true
                        },
                        "serieDataId": "582756a792a35f04008e2500",
                        "queryID": "e7d07030858d465db728deb96ce6816e",
                        "dataID": "5827565e92a35f04008e24fd",
                        "direction": "Rows",
                        "dataIndex": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                        "bins": 4,
                        "scope": "none"
                    }, {
                        "type": "v2.nvd3-radar",
                        "instanceName": "25d5b7cbnaqzg1yzfzgqruow29",
                        "icon": "/widgets/v2.nvd3-radar/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Threats",
                            "subtitle": "",
                            "caption": "",
                            "isArea": false,
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 999
                        },
                        "serieDataId": "5827569492a35f04008e24ff",
                        "queryID": "e7d07030858d465db728deb96ce6816e",
                        "dataID": "5827565e92a35f04008e24fd",
                        "emitters": "selector.selectObject.selectSerie"
                    }],
                    "width": 999
                },
                "bottom": {
                    "widgets": [{
                        "type": "v2.query-manager",
                        "instanceName": "86k19eh0une4w9e16pn8f47vi",
                        "icon": "/widgets/v2.query-manager/icon.png",
                        "queries": [{
                            "$id": "fcb7f695732e60abe54272c644383c20",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "ua",
                            "context": {
                                "query": {
                                    "commitID": "5747f3a969bb59030006b81b",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5747f4a069bb59030006b822"
                            }
                        }, {
                            "$id": "98329f4be77bd4d2f002cc3c4b2d9922",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "ua sort",
                            "context": {
                                "queryResultId": "5747f4c469bb59030006b825",
                                "script": [{
                                    "shortName": "Select ua(5747f4a069bb59030006b822)",
                                    "select": {
                                        "source": "ua"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by Область",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "61b2ee3c3f1e5fe9339a9e5dca0a1da9",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "copmonents",
                            "context": {
                                "query": {
                                    "commitID": "5747f3a969bb59030006b81b",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Ie", "Iec", "Is"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5747f7fb69bb59030006b836"
                            }
                        }, {
                            "$id": "37be9c15fd3072c87c70d83c67c8e8b3",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "cls",
                            "context": {
                                "queryResultId": "5747f83369bb59030006b83a",
                                "script": [{
                                    "shortName": "Select copmonents(5747f7fb69bb59030006b836)",
                                    "select": {
                                        "source": "copmonents"
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by .Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "3"
                                    }
                                }]
                            }
                        }, {
                            "$id": "ebbdb0c521c1c6850b744e90dfcce175",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "threats",
                            "context": {
                                "query": {
                                    "commitID": "574c2779cec7460300052a39",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "574c2885cec7460300052a3c"
                            }
                        }, {
                            "$id": "e7e51aea52c1abab63f9aa0102a19366",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "thr map",
                            "context": {
                                "queryResultId": "574c28c4cec7460300052a3f",
                                "script": [{
                                    "shortName": "Select threats(574c2885cec7460300052a3c)",
                                    "select": {
                                        "source": "threats"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Показник",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "354a565196bcfd608e1bd3a1ef51885a",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "ua2014",
                            "context": {
                                "query": {
                                    "commitID": "577e2c96ef3e3a03007ec28d",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5784f8a15193410300d65a16"
                            }
                        }, {
                            "$id": "e07dec5551bdd54baae3fe97ade3c95b",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "uasort2014",
                            "context": {
                                "queryResultId": "5784f8cc5193410300d65a19",
                                "script": [{
                                    "shortName": "Select ua2014(5784f8a15193410300d65a16)",
                                    "select": {
                                        "source": "ua2014"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by Region",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "884f9d6b5d14b5a3bd82693df3365cec",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "comp2014",
                            "context": {
                                "query": {
                                    "commitID": "577e2c96ef3e3a03007ec28d",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Iec", "Ie", "Is"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5784f9315193410300d65a1f"
                            }
                        }, {
                            "$id": "825625ba089d5ad37f3d3c9ffe5e5f4a",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "cls2014",
                            "context": {
                                "queryResultId": "5784f9835193410300d65a23",
                                "script": [{
                                    "shortName": "Select comp2014(5784f9315193410300d65a1f)",
                                    "select": {
                                        "source": "comp2014"
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by .Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "3"
                                    }
                                }]
                            }
                        }, {
                            "$id": "2f2165a9b4e4b911a9282bcba6fbfea8",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "thr2014",
                            "context": {
                                "query": {
                                    "commitID": "5784fb1b5193410300d65a28",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Ignore",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5784fb875193410300d65a2e"
                            }
                        }, {
                            "$id": "252be8f86b93aba6c94940f01fea8275",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "thr2014_2",
                            "context": {
                                "query": {
                                    "commitID": "5784fb1b5193410300d65a28",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5784fbe05193410300d65a35"
                            }
                        }, {
                            "$id": "4763ce9304bb5e80e606d99e0a15cdf6",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "thrmap2014",
                            "context": {
                                "queryResultId": "5784fcdb5193410300d65a49",
                                "script": [{
                                    "shortName": "Select thr2014(5784fb875193410300d65a2e)",
                                    "select": {
                                        "source": "thr2014"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Indicator",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 4",
                                    "precision": 4
                                }]
                            }
                        }, {
                            "$id": "eed5d800eec96075681a53869bb7a381",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "ua2014_2",
                            "context": {
                                "query": {
                                    "commitID": "5784ff6d5193410300d65a5e",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "5784ffb75193410300d65a62"
                            }
                        }, {
                            "$id": "59eb6df7b2e109631e2372755c17e71b",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "uas2014_2",
                            "context": {
                                "queryResultId": "5784fff45193410300d65a67",
                                "script": [{
                                    "shortName": "Select ua2014_2(5784ffb75193410300d65a62)",
                                    "select": {
                                        "source": "ua2014_2"
                                    }
                                }, {
                                    "shortName": "Number precision: 4",
                                    "precision": 4
                                }, {
                                    "shortName": "Sort Rows A-Z order by Область",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "2e82d537cdf752d6555a11e1e89d0f9e",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "threats2014",
                            "context": {
                                "query": {
                                    "commitID": "5785017f5193410300d65a6e",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Ignore",
                                        "collection": []
                                    }],
                                    "locale": "uk"
                                },
                                "queryResultId": "578501d75193410300d65a74"
                            }
                        }, {
                            "$id": "8dba0b2b000f1236b8a36cc246e0c4fe",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "threatmap2014",
                            "context": {
                                "queryResultId": "578502375193410300d65a7c",
                                "script": [{
                                    "shortName": "Select threats2014(578501d75193410300d65a74)",
                                    "select": {
                                        "source": "threats2014"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Columns A-Z order by Показник",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }]
                            }
                        }, {
                            "$id": "65e9844acc05253858689a8f09ba8601",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "ua2014newSrc",
                            "context": {
                                "query": {
                                    "commitID": "57d40168d9cf2f030097cb7a",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d40255d9cf2f030097cb7e"
                            }
                        }, {
                            "$id": "a06c7fa4eef31d6bfcdebdcdf407ce31",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "ua2014newSort",
                            "context": {
                                "queryResultId": "57d40297d9cf2f030097cb81",
                                "script": [{
                                    "shortName": "Select ua2014newSrc(57d40255d9cf2f030097cb7e)",
                                    "select": {
                                        "source": "ua2014newSrc"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Region",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "7ac26d8ed21b0045782147d81c2f966e",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "comp2014newSrc",
                            "context": {
                                "query": {
                                    "commitID": "57d40168d9cf2f030097cb7a",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Iec", "Ie", "Is"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d402c9d9cf2f030097cb83"
                            }
                        }, {
                            "$id": "3f257090204071dc276365fcc9cf32f8",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "comp2014newClust",
                            "context": {
                                "queryResultId": "57d40304d9cf2f030097cb87",
                                "script": [{
                                    "shortName": "Select comp2014newSrc(57d402c9d9cf2f030097cb83)",
                                    "select": {
                                        "source": "comp2014newSrc"
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }, {
                                    "shortName": "Sort Rows A-Z order by Cluster Index",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "3"
                                    }
                                }]
                            }
                        }, {
                            "$id": "f755e8f17af1822993640cdabecdd5f9",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "threat2014newSrc",
                            "context": {
                                "query": {
                                    "commitID": "57d40072d9cf2f030097cb76",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d40369d9cf2f030097cb89"
                            }
                        }, {
                            "$id": "1f81b3c24be6871c759a46eaca5d6265",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "treats2014newMap",
                            "context": {
                                "queryResultId": "57d403bbd9cf2f030097cb8c",
                                "script": [{
                                    "shortName": "Select threat2014newSrc(57d40369d9cf2f030097cb89)",
                                    "select": {
                                        "source": "threat2014newSrc"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Indicator",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "0b4bdb675aa0f008894e442087e2a255",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CqlDim2016",
                            "context": {
                                "query": {
                                    "commitID": "58274fd792a35f04008e24d7",
                                    "datasetID": "3bdb4ae0-a8f5-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": ["Львівська", "Чернігівська", "Черкаська", "Хмельницька", "Херсонська", "Харківська", "Тернопільська", "Сумська", "Рівненська", "Полтавська", "Одеська", "Миколаївська", "Чернівецька", "Луганська", "Кіровоградська", "Київська", "Київ", "Івано-Франківська", "Запорізька", "Закарпатська", "Житомирська", "Донецька", "Дніпропетровська", "Волинська", "Вінницька"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Is", "Ie", "Iec"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": ["2014"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5827500692a35f04008e24db"
                            }
                        }, {
                            "$id": "0a1003c63cfc2052ed636550771c406d",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CqlDimClust",
                            "context": {
                                "queryResultId": "5827507392a35f04008e24df",
                                "script": [{
                                    "shortName": "Select CqlDim2016(5827500692a35f04008e24db)",
                                    "select": {
                                        "source": "CqlDim2016"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Region",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "57b4bf2fb3cd2d7f50b93ba14df2d171",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "UaAll2016",
                            "context": {
                                "query": {
                                    "commitID": "58274fd792a35f04008e24d7",
                                    "datasetID": "3bdb4ae0-a8f5-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": ["Львівська", "Чернігівська", "Черкаська", "Хмельницька", "Херсонська", "Харківська", "Тернопільська", "Сумська", "Рівненська", "Полтавська", "Одеська", "Миколаївська", "Чернівецька", "Луганська", "Кіровоградська", "Київська", "Київ", "Івано-Франківська", "Запорізька", "Закарпатська", "Житомирська", "Донецька", "Дніпропетровська", "Волинська", "Вінницька"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": ["2014"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5827510292a35f04008e24e3"
                            }
                        }, {
                            "$id": "1999f2c3319a2e7a3d037d3fe7cf6116",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "UaAll2016obr",
                            "context": {
                                "queryResultId": "5827512792a35f04008e24e6",
                                "script": [{
                                    "shortName": "Select UaAll2016(5827510292a35f04008e24e3)",
                                    "select": {
                                        "source": "UaAll2016"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Region",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "037f083dc1faa96b90ab6f1733975562",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "UaCql2016",
                            "context": {
                                "query": {
                                    "commitID": "5827546692a35f04008e24ed",
                                    "datasetID": "3bdb4ae0-a8f5-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": ["Львівська", "Волинська", "Дніпропетровська", "Донецька", "Житомирська", "Закарпатська", "Запорізька", "Івано-Франківська", "Київ", "Київська", "Кіровоградська", "Луганська", "Вінницька", "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська", "Хмельницька", "Черкаська", "Чернівецька", "Чернігівська"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Cql", "Ie", "Iec", "Is", "Isd", "Csl"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": ["2014"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5827556992a35f04008e24f3"
                            }
                        }, {
                            "$id": "8a7d5a8cf5021eb8ad9624670bd85ee6",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "UaCsl2016",
                            "context": {
                                "query": {
                                    "commitID": "5827546692a35f04008e24ed",
                                    "datasetID": "3bdb4ae0-a8f5-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": ["Львівська", "Волинська", "Дніпропетровська", "Донецька", "Житомирська", "Закарпатська", "Запорізька", "Івано-Франківська", "Київ", "Київська", "Кіровоградська", "Луганська", "Вінницька", "Миколаївська", "Одеська", "Полтавська", "Рівненська", "Сумська", "Тернопільська", "Харківська", "Херсонська", "Хмельницька", "Черкаська", "Чернівецька", "Чернігівська"]
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["CORR_PER", "BN", "CIR", "CRIME", "DNO", "LIFE_EXP", "POL", "WRS", "CCH", "HEALTH_DEC", "TH", "RZOF"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "582755a192a35f04008e24f5"
                            }
                        }, {
                            "$id": "1fba497cb07c44d49c22c2ba7f41ecdc",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "UA_all",
                            "context": {
                                "queryResultId": "5827562792a35f04008e24f9",
                                "script": [{
                                    "shortName": "Select UaCql2016(5827556992a35f04008e24f3)",
                                    "select": {
                                        "source": "UaCql2016"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Region",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Indicator",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "e7d07030858d465db728deb96ce6816e",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "UA_thr",
                            "context": {
                                "queryResultId": "5827565e92a35f04008e24fd",
                                "script": [{
                                    "shortName": "Select UaCsl2016(582755a192a35f04008e24f5)",
                                    "select": {
                                        "source": "UaCsl2016"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Region",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Indicator",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }]
                    }],
                    "width": 1328
                }
            },
            "subscriptions": [{
                "emitter": "selector",
                "receiver": "lig1svb34031a1vuyaj6y9zfr"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectObject",
                "receiver": "6k2kc8qodfiokdt1l6ysulq5mi"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectObject",
                "receiver": "vx417ltllilhxzhmpjru23xr"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectObject",
                "receiver": "lig1svb34031a1vuyaj6y9zfr"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "56h77ggw7z832phxtlpszl4n29"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "25d5b7cbnaqzg1yzfzgqruow29"
            }]
        }, {
            "shortTitle": "lanMethod",
            "href": "methodology",
            "template": "1-col",
            "holders": {
                "column": {
                    "widgets": [{
                        "text": "<p class=\"MsoNormal\" style=\"text-align:justify;text-justify:inter-ideograph;\ntext-indent:35.45pt\"><span style=\"font-size: 14.6667px;\"></span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px; font-family: Verdana, Arial, Helvetica, sans-serif; text-align: justify; text-indent: 35.45pt;\">Методологія оцінювання та аналізу сталого розвитку містить модель сталого розвитку, яка є міждисциплінарним узагальненням моделей, відомих в природничих, економічних та соціальних галузях науки, та методику застосування формальних статистичних методів та методів експертного оцінювання для аналізу процесів сталого розвитку.</span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Згідно з цією методологією, процес сталого розвитку будемо характеризувати двома основними складовими: безпекою і якістю життя людей, а узагальнену міру сталого розвитку визначається за допомогою кватеріона&nbsp;</span><span style=\"font-size: 14.6667px;\">{Q}.</span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Кватеріон {Q} містить уявну зважену скалярну частину, яка описує безпеку життя людей, і зважену дійсну векторну частину, яка описує якість життя людей у просторі трьох вимірів: економічного, екологічного і соціально-інституціонального. При цьому&nbsp;</span><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">уявна скалярна частина</span><span style=\"font-size: 14.6667px;\">&nbsp;набуває значення дійсної одиниці для нормального, регулярного&nbsp;стану розвитку суспільства, і залишається уявною, коли суспільство переходить у стан конфлікту. Згідно з результатами аналізу стану країн світу Heidelberg Institute for International Conflict Research визначив такі рівні конфліктів:</span></p><p class=\"MsoNormal\" style=\"text-align:justify;text-justify:inter-ideograph;\ntext-indent:35.45pt\"></p><ul><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\">0 &nbsp;(Without crisis) – у країні відсутні конфлікти;&nbsp;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\">1 &nbsp;(Dispute) – політичний конфікт без людських втрат;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\">2 &nbsp;(Non-violent crisis) – політичний конфлікт, в якому одна з сторін погрожувала розправою;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\">3 (Violent crisis) – слабоінтенсивний конфлікт з невеликими людськими втратами, в якому використовується тільки легка зброя;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\">4 &nbsp;(Limited war) – інтесивний конфлікт з середніми людськими втратами, в якому або використовується тяжка зброя або задіяно значну кількість учасників;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\">5 &nbsp;(War) – інтесивний конфлікт з великими людськими втратами, в якому використовується тяжка зброя та задіяно значну кількість учасників.</span><br></li></ul><p></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Таким чином, під <b>індексом сталого розвитку</b> будемо розуміти кількісну міру сталого розвитку, яка враховує безпеку та якість життя людей. І с</span><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">аме для 5 рівня конфлікту частина кватеріона з безпекою життя стає уявною, і для розрахунку індексу сталого розвитку вона приймається за 0.&nbsp;</span></p><p class=\"\" style=\"\"><b style=\"font-size: 14.6667px; text-indent: 35.45pt;\">Компонента якості життя</b><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\"> – інтегральна оцінка, яка враховує сумісно усі три виміри сталого розвитку, і, тим самим, відображає взаємозв’язок між трьома нероздільними сферами розвитку суспільства: економічною, екологічною та соціальною. Ступінь гармонізації сталого розвитку відображає баланс між його економічним, екологічним та соціально-інституціональним вимірами.</span></p><p class=\"\" style=\"\"><span style=\"font-size: 11pt;\">Таким чином, </span><b style=\"font-size: 11pt;\">компонента безпеки\nжиття</b><span style=\"font-size: 11pt;\"> – інтегральна оцінка, яка враховує сумарний вплив сукупності\nглобальних загроз на сталий розвиток країн світу, а </span><b style=\"font-size: 11pt;\">індекс вразливості</b><span style=\"font-size: 11pt;\"> країни до впливу сукупності глобальних загроз\nвідображає ступінь наближення цієї країни одночасно до усіх загроз у просторі,\nякий визначається нормою Мінковського.</span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Детальніше за посиланнями:</span></p><p class=\"MsoNormal\" style=\"text-align:justify;text-justify:inter-ideograph;\ntext-indent:35.45pt\"></p><ul><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\"><a href=\"http://wdc.org.ua/sites/default/files/sd2013-P1-FULL-EN_1.pdf\">Індекс сталого розвитку для країн світу</a>;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\"><a href=\"http://wdc.org.ua/sites/default/files/sd2013-FULL-P2-UA_0.pdf\">Індекс сталого розвитку для регіонів України</a>.</span><br></li></ul><p></p><div style=\"text-align: justify; text-indent: 47.2667px;\"><br></div>",
                        "type": "htmlwidget",
                        "instanceName": "bvgh5biakee1qpfq8g2xa8aor",
                        "icon": "/widgets/htmlwidget/icon.png"
                    }, {
                        "text": "<p class=\"MsoNormal\" style=\"text-align:justify;text-justify:inter-ideograph;\ntext-indent:35.45pt\"><span style=\"font-size: 14.6667px;\"></span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Methodology for evaluating and analyzing sustainable development contains a model of sustainable development, which is interdisciplinary generalization of models, known in the nature, economic and social fields of science, and technique and application of formal statistical methods and techniques for analysis expert assessment of sustainable development.</span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">According to this methodology, the process of sustainable development is characterized by two main components: security and quality of human life, and generalized measure of sustainable development is defined using quaterion {Q}.</span><br></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Quaterion {Q} contains imaginary weighted scalar part, which describes the safety of human life and the weighted actual vector of describing the quality of life in the space of three dimensions: economic, environmental and social. This imaginary scalar value becomes the usual under regular state of society and&nbsp;</span><span style=\"font-size: 14.6667px;\">imaginary</span><span style=\"font-size: 14.6667px;\">&nbsp;when society goes into a conflict.&nbsp;According to the analysis of the world Heidelberg Institute for International Conflict Research identified the following levels of conflict:</span></p><p class=\"\" style=\"text-align: justify; text-indent: 47.2667px;\"></p><ul><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">0 (Without crisis) - the country has no conflicts;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">1 (Dispute) - political&nbsp;<span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">conflicts</span>&nbsp;without loss of life;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">2 (Non-violent crisis) - the political conflict in which one party threatened with death;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">3 (Violent crisis) - conflict with some casualties, which uses only light weapons;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">4 (Limited war) - intensive conflict with the average loss of life, or which use heavy weapons or involved a large number of participants;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">5 (War) - intensive conflict with major loss of life, which used heavy weapons and involved a large number of participants.</span><br></li></ul><p></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Thus, under <b>sustainable development index</b> we mean a quantitative measure of sustainable development, taking into account the safety and quality of human life. For level 5 of conflict safety of life becomes apparent, and to calculate the index of sustainable development it is taken as 0.</span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\"><b>Component quality of life</b>&nbsp;is integrated assessment that considers together all three dimensions of sustainable development, and thus reflects the relationship between the three inseparable spheres of society: economic, environmental and social. The degree of harmonization of sustainable development reflects a balance between the economic, environmental and social dimensions.</span><br></p><p class=\"\" style=\"\"><b style=\"font-size: 14.6667px;\">Component security of life</b><span style=\"font-size: 14.6667px;\">&nbsp;is integrated assessment, which takes into account the total impact</span><span style=\"font-size: 14.6667px;\"> of global threats to the sustainable development of countries and country.Index vulnerability of the country to the effects of global threats reflects the degree of approximation of the country simultaneously to all threats in space, defined Minkowski norm.</span><br></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">More links:</span></p><p class=\"MsoNormal\" style=\"text-align:justify;text-justify:inter-ideograph;\ntext-indent:35.45pt\"></p><ul><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\"><a href=\"http://wdc.org.ua/sites/default/files/sd2013-P1-FULL-EN_1.pdf\">The index of sustainable development for the world</a>;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\"><a href=\"http://wdc.org.ua/sites/default/files/sd2013-FULL-P2-UA_0.pdf\">The index of sustainable development for the regions of Ukraine</a>.</span><br></li></ul><p></p><div style=\"text-align: justify; text-indent: 47.2667px;\"><br></div>",
                        "type": "htmlwidget",
                        "instanceName": "35ai4bmxa18ldr12ymr2euq5mi",
                        "icon": "/widgets/htmlwidget/icon.png"
                    }, {
                        "url": "",
                        "masterWidget": "35ai4bmxa18ldr12ymr2euq5mi",
                        "type": "remote-html",
                        "instanceName": "0iqucc53avjtpslx5tc8ebqpvi",
                        "icon": "/widgets/remote-html/icon.png"
                    }],
                    "width": 1328
                }
            },
            "subscriptions": [{
                "emitter": "bvgh5biakee1qpfq8g2xa8aor",
                "receiver": "5n4qguswkz73comy33m35cow29",
                "signal": "slaveVisibility",
                "slot": "slaveVisibility"
            }, {
                "emitter": "https://dj-app.herokuapp.com/app/SDI/methodology",
                "receiver": "rwucrn9j91bbextvrevcxr",
                "signal": "slaveVisibility",
                "slot": "slaveVisibility"
            }, {
                "emitter": "35ai4bmxa18ldr12ymr2euq5mi",
                "receiver": "0iqucc53avjtpslx5tc8ebqpvi",
                "signal": "slaveVisibility",
                "slot": "slaveVisibility"
            }]
        }, {
            "shortTitle": "Methodology",
            "href": "methodologyEN",
            "template": "1-col",
            "holders": {
                "column": {
                    "widgets": [{
                        "text": "<p class=\"MsoNormal\" style=\"text-align:justify;text-justify:inter-ideograph;\ntext-indent:35.45pt\"><span style=\"font-size: 14.6667px;\"></span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Methodology for evaluating and analyzing sustainable development contains a model of sustainable development, which is interdisciplinary generalization of models, known in the nature, economic and social fields of science, and technique and application of formal statistical methods and techniques for analysis expert assessment of sustainable development.</span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">According to this methodology, the process of sustainable development is characterized by two main components: security and quality of human life, and generalized measure of sustainable development is defined using quaterion {Q}.</span><br></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Quaterion {Q} contains imaginary weighted scalar part, which describes the safety of human life and the weighted actual vector of describing the quality of life in the space of three dimensions: economic, environmental and social. This imaginary scalar value becomes the usual under regular state of society and&nbsp;</span><span style=\"font-size: 14.6667px;\">imaginary</span><span style=\"font-size: 14.6667px;\">&nbsp;when society goes into a conflict.&nbsp;According to the analysis of the world Heidelberg Institute for International Conflict Research identified the following levels of conflict:</span></p><p class=\"\" style=\"text-align: justify; text-indent: 47.2667px;\"></p><ul><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">0 (Without crisis) - the country has no conflicts;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">1 (Dispute) - political&nbsp;<span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">conflicts</span>&nbsp;without loss of life;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">2 (Non-violent crisis) - the political conflict in which one party threatened with death;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">3 (Violent crisis) - conflict with some casualties, which uses only light weapons;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">4 (Limited war) - intensive conflict with the average loss of life, or which use heavy weapons or involved a large number of participants;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 47.2667px;\">5 (War) - intensive conflict with major loss of life, which used heavy weapons and involved a large number of participants.</span><br></li></ul><p></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">Thus, under <b>sustainable development index</b> we mean a quantitative measure of sustainable development, taking into account the safety and quality of human life. For level 5 of conflict safety of life becomes apparent, and to calculate the index of sustainable development it is taken as 0.</span></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\"><b>Component quality of life</b>&nbsp;is integrated assessment that considers together all three dimensions of sustainable development, and thus reflects the relationship between the three inseparable spheres of society: economic, environmental and social. The degree of harmonization of sustainable development reflects a balance between the economic, environmental and social dimensions.</span><br></p><p class=\"\" style=\"\"><b style=\"font-size: 14.6667px;\">Component security of life</b><span style=\"font-size: 14.6667px;\">&nbsp;is integrated assessment, which takes into account the total impact</span><span style=\"font-size: 14.6667px;\"> of global threats to the sustainable development of countries and country.Index vulnerability of the country to the effects of global threats reflects the degree of approximation of the country simultaneously to all threats in space, defined Minkowski norm.</span><br></p><p class=\"\" style=\"\"><span style=\"font-size: 14.6667px;\">More links:</span></p><p class=\"MsoNormal\" style=\"text-align:justify;text-justify:inter-ideograph;\ntext-indent:35.45pt\"></p><ul><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\"><a href=\"http://wdc.org.ua/sites/default/files/sd2013-P1-FULL-EN_1.pdf\">The index of sustainable development for the world</a>;</span><br></li><li><span style=\"font-size: 14.6667px; text-indent: 35.45pt;\"><a href=\"http://wdc.org.ua/sites/default/files/sd2013-FULL-P2-UA_0.pdf\">The index of sustainable development for the regions of Ukraine</a>.</span><br></li></ul><p></p><div style=\"text-align: justify; text-indent: 47.2667px;\"><br></div>",
                        "type": "htmlwidget",
                        "instanceName": "35ai4bmxa18ldr12ymr2euq5mi",
                        "icon": "/widgets/htmlwidget/icon.png"
                    }, {
                        "url": "",
                        "masterWidget": "35ai4bmxa18ldr12ymr2euq5mi",
                        "type": "remote-html",
                        "instanceName": "0iqucc53avjtpslx5tc8ebqpvi",
                        "icon": "/widgets/remote-html/icon.png"
                    }],
                    "width": 1200
                }
            },
            "subscriptions": [{
                "emitter": "bvgh5biakee1qpfq8g2xa8aor",
                "receiver": "5n4qguswkz73comy33m35cow29",
                "signal": "slaveVisibility",
                "slot": "slaveVisibility"
            }, {
                "emitter": "https://dj-app.herokuapp.com/app/SDI/methodology",
                "receiver": "rwucrn9j91bbextvrevcxr",
                "signal": "slaveVisibility",
                "slot": "slaveVisibility"
            }, {
                "emitter": "35ai4bmxa18ldr12ymr2euq5mi",
                "receiver": "0iqucc53avjtpslx5tc8ebqpvi",
                "signal": "slaveVisibility",
                "slot": "slaveVisibility"
            }]
        }, {
            "shortTitle": "lanSust",
            "href": "",
            "template": "left-right-bottom",
            "holders": {
                "column": {
                    "widgets": [{
                        "enabled": true,
                        "bgImage": "http://wdc.org.ua/sites/default/themes/ninesixtyrobots/images/header.png",
                        "type": "v2.banner",
                        "instanceName": "eeoq14aghqyamj1ovozntgldi",
                        "icon": "/widgets/v2.banner/icon.png"
                    }, {
                        "title": "Sustainable Development Index",
                        "intro": "Exploration of global context SDI-2015  ",
                        "text": "",
                        "type": "html-article",
                        "instanceName": "k9uas0bvx8qbah092y2pgb9",
                        "icon": "/widgets/html-article/icon.png"
                    }],
                    "width": 1200
                },
                "topleft": {
                    "widgets": [{
                        "type": "v2.table",
                        "instanceName": "q4n15vi3vp8znp96whotro1or",
                        "icon": "/widgets/v2.table/icon.png",
                        "decoration": {
                            "colorize": false,
                            "height": 505,
                            "opacity": 0.5,
                            "direction": "Rows",
                            "width": 659,
                            "title": "Index of Sustainable Development",
                            "scroll": true,
                            "subtitle": "",
                            "caption": ""
                        },
                        "dataID": "582746ba92a35f04008e24ae",
                        "queryID": "23f8494db97370708fed390b4e126fcb"
                    }, {
                        "type": "v2.nvd3-scatter",
                        "instanceName": "5slmu2qyffso64n0i2ufcx47vi",
                        "icon": "/widgets/v2.nvd3-scatter/icon.png",
                        "decoration": {
                            "height": 300,
                            "title": "Dimensions of Quality of Life Component (economic and social)",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Index of economic dimension",
                            "yAxisName": "Index of social dimension",
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "showLabels": false,
                            "width": 659
                        },
                        "serieDataId": "5827486c92a35f04008e24bc",
                        "queryID": "6b04cc33723c88a07c0a3f60ac1dacb5",
                        "dataID": "582747a392a35f04008e24ba",
                        "axisX": 1,
                        "index": [0]
                    }, {
                        "type": "v2.data-selector",
                        "instanceName": "sel",
                        "icon": "/widgets/v2.data-selector/icon.png",
                        "decoration": {
                            "direction": "Rows",
                            "meta": {
                                "key": "Country",
                                "index": 0
                            },
                            "view": "Typeahead",
                            "title": "Start typing to choose countries"
                        },
                        "queryID": "6b04cc33723c88a07c0a3f60ac1dacb5",
                        "dataID": "582747a392a35f04008e24ba"
                    }, {
                        "type": "v2.nvd3-bar-h",
                        "instanceName": "egoai0ni6nm0bz34ip2m8zd7vi",
                        "icon": "/widgets/v2.nvd3-bar-h/icon.png",
                        "decoration": {
                            "height": 310,
                            "title": "",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "",
                            "yAxisName": "Countries",
                            "showControls": true,
                            "stacked": false,
                            "width": 659,
                            "enableEmitEvents": true,
                            "color": ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]
                        },
                        "serieDataId": "5827490192a35f04008e24be",
                        "queryID": "6b04cc33723c88a07c0a3f60ac1dacb5",
                        "dataID": "582747a392a35f04008e24ba",
                        "emitters": "sel.selectObject.selectSerie"
                    }, {
                        "type": "v2.data-selector",
                        "instanceName": "sel2",
                        "icon": "/widgets/v2.data-selector/icon.png",
                        "decoration": {
                            "direction": "Rows",
                            "meta": {
                                "key": "Country",
                                "index": 0
                            },
                            "view": "Typeahead",
                            "title": "Start typing to choose countries"
                        },
                        "queryID": "2d9b727c2381c42653f7972995b34482",
                        "dataID": "58274a7392a35f04008e24c4"
                    }, {
                        "type": "v2.nvd3-bar-h",
                        "instanceName": "fu5zsygwnpnzkey1tdt68byb9",
                        "icon": "/widgets/v2.nvd3-bar-h/icon.png",
                        "decoration": {
                            "height": 400,
                            "title": "",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "",
                            "yAxisName": "Countries",
                            "showControls": true,
                            "stacked": false,
                            "width": 659
                        },
                        "serieDataId": "58274ad092a35f04008e24c5",
                        "queryID": "2d9b727c2381c42653f7972995b34482",
                        "dataID": "58274a7392a35f04008e24c4",
                        "emitters": "sel2.selectObject.selectSerie"
                    }],
                    "width": 659
                },
                "topright": {
                    "widgets": [{
                        "type": "v2.nvd3-geochart",
                        "instanceName": "3dqdvuxa0z2osn6pdc4902uik9",
                        "icon": "/widgets/v2.nvd3-geochart/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Clusters for Sustainable Development Index",
                            "subtitle": "2015",
                            "caption": "",
                            "color": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3"],
                            "showLabels": true,
                            "showValues": false,
                            "showTiles": true,
                            "selectedTiles": "mapbox.outdoors",
                            "interactive": true,
                            "defaultFill": "#f0f0f0",
                            "defaultFillOpacity": 0,
                            "defaultStroke": "#909095",
                            "defaultStrokeWidth": 1,
                            "defaultStrokeOpacity": 0.75,
                            "selectedFillOpacity": "1",
                            "selectedStrokeWidth": 3,
                            "boundary": {
                                "scale": 1233.052017834056,
                                "translate": [376.9257046259036, 335.9697679134914]
                            },
                            "width": 659,
                            "initialScope": true
                        },
                        "serieDataId": "582746f392a35f04008e24af",
                        "queryID": "23f8494db97370708fed390b4e126fcb",
                        "dataID": "582746ba92a35f04008e24ae",
                        "direction": "Rows",
                        "dataIndex": [2],
                        "bins": 4,
                        "scope": "World"
                    }, {
                        "type": "v2.nvd3-scatter",
                        "instanceName": "9tv8h58s23hops3lbvg0t3xr",
                        "icon": "/widgets/v2.nvd3-scatter/icon.png",
                        "decoration": {
                            "height": 300,
                            "title": "Dimensions of Quality of Life Component (economic and environmental)",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Index of economic dimension",
                            "yAxisName": "Index of environmental dimension",
                            "staggerLabels": false,
                            "showLabels": false,
                            "width": 659
                        },
                        "serieDataId": "582748d792a35f04008e24bd",
                        "queryID": "6b04cc33723c88a07c0a3f60ac1dacb5",
                        "dataID": "582747a392a35f04008e24ba",
                        "axisX": 1,
                        "index": [2]
                    }, {
                        "type": "v2.nvd3-radar",
                        "instanceName": "nwb2mjpzdro845dyn0q060f6r",
                        "icon": "/widgets/v2.nvd3-radar/icon.png",
                        "decoration": {
                            "height": 400,
                            "title": "Quality of Life Dimensions",
                            "subtitle": "",
                            "caption": "",
                            "isArea": false,
                            "color": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf"],
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 659,
                            "enableEmitEvents": true
                        },
                        "serieDataId": "5827490192a35f04008e24be",
                        "queryID": "6b04cc33723c88a07c0a3f60ac1dacb5",
                        "dataID": "582747a392a35f04008e24ba",
                        "emitters": "sel.selectObject.selectSerie"
                    }, {
                        "type": "v2.nvd3-radar",
                        "instanceName": "bviqnfmjvcarrn0unk0ara4i",
                        "icon": "/widgets/v2.nvd3-radar/icon.png",
                        "decoration": {
                            "height": 490,
                            "title": "Global Threats",
                            "subtitle": "",
                            "caption": "",
                            "isArea": false,
                            "color": ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf"],
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 659
                        },
                        "serieDataId": "58274ad092a35f04008e24c5",
                        "queryID": "2d9b727c2381c42653f7972995b34482",
                        "dataID": "58274a7392a35f04008e24c4",
                        "emitters": "sel2.selectObject.selectSerie"
                    }],
                    "width": 659
                },
                "bottom": {
                    "widgets": [{
                        "type": "v2.nvd3-chord",
                        "instanceName": "xe851chj9ui9kuz6xb3mcxr",
                        "icon": "/widgets/v2.nvd3-chord/icon.png",
                        "decoration": {
                            "height": 450,
                            "title": "Threats Dependencies",
                            "subtitle": "",
                            "caption": "",
                            "isArea": true,
                            "showLabels": false,
                            "ticks": 5,
                            "tickLabel": true,
                            "grid": true,
                            "axisLabel": true,
                            "width": 1200
                        },
                        "serieDataId": "58275c9092a35f04008e2515",
                        "queryID": "7e5c85d6daf29dc861a275c680493f3a",
                        "dataID": "58275c7292a35f04008e2514"
                    }, {
                        "type": "v2.table",
                        "instanceName": "z8708j48t1zw6kkmnlk6mkj4i",
                        "icon": "/widgets/v2.table/icon.png",
                        "decoration": {
                            "colorize": false,
                            "height": 400,
                            "opacity": 0.5,
                            "direction": "Rows",
                            "width": 1200,
                            "title": "SDI Indicators",
                            "scroll": true
                        },
                        "dataID": "58274bb792a35f04008e24cf",
                        "queryID": "b0583136dd27e3d025219c6186359829"
                    }, {
                        "type": "v2.table",
                        "instanceName": "yufki6h05p61pzwncatw3ik9",
                        "icon": "/widgets/v2.table/icon.png",
                        "decoration": {
                            "colorize": false,
                            "height": 400,
                            "opacity": 0.5,
                            "direction": "Rows",
                            "width": 1200,
                            "title": "Global Threats",
                            "scroll": true
                        },
                        "dataID": "58274a7392a35f04008e24c4",
                        "queryID": "2d9b727c2381c42653f7972995b34482"
                    }, {
                        "type": "v2.query-manager",
                        "instanceName": "kgm8g8e9lm7ypykrzxdbcsor",
                        "icon": "/widgets/v2.query-manager/icon.png",
                        "queries": [{
                            "$id": "8535c7b2476235bfca8f9c5bb6d288e8",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Isd",
                            "context": {
                                "query": {
                                    "commitID": "57ce805940df3803007848d3",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57cfd5663490410300d66f4c"
                            }
                        }, {
                            "$id": "79aa4322192a14bbcc0b6e3a561a78fc",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "IsdClust",
                            "context": {
                                "queryResultId": "57cfd5c73490410300d66f51",
                                "script": [{
                                    "shortName": "Select Isd(57cfd5663490410300d66f4c)",
                                    "select": {
                                        "source": "Isd"
                                    }
                                }, {
                                    "shortName": "Sort Rows Z-A order by Index of sustainable development",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "Z-A",
                                        "index": "0"
                                    }
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Rank A-Z for Rows(Index of sustainable development)",
                                    "rank": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "indexes": [0]
                                    }
                                }, {
                                    "shortName": "Number precision: 2",
                                    "precision": 2
                                }]
                            }
                        }, {
                            "$id": "aef82e58e0e201b60a28a3721eb62a82",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "IsdClustTable",
                            "context": {
                                "queryResultId": "57cfd6913490410300d66f53",
                                "script": [{
                                    "shortName": "Select IsdClust(57cfd5c73490410300d66f51)",
                                    "select": {
                                        "source": "IsdClust"
                                    }
                                }, {
                                    "shortName": "Use Column Metadata(Indicator,Type)",
                                    "useColumnMetadata": [true, true]
                                }]
                            }
                        }, {
                            "$id": "81239f3f30ac2bcb2029326bc33caaaa",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CqlDim",
                            "context": {
                                "query": {
                                    "commitID": "57ce805940df3803007848d3",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Iec", "Ie", "Is"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57cfda0a3490410300d66f62"
                            }
                        }, {
                            "$id": "83812d8c9b4f66957aaedaf94f5c602f",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CqlDimForScat",
                            "context": {
                                "queryResultId": "57cfda353490410300d66f64",
                                "script": [{
                                    "shortName": "Select CqlDim(57cfda0a3490410300d66f62)",
                                    "select": {
                                        "source": "CqlDim"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "998916f5817417d995ebd027ec0ef184",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "AllSDI",
                            "context": {
                                "query": {
                                    "commitID": "57ce805940df3803007848d3",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Cql", "Csl", "Iec", "Ie", "Is", "Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57cfe2753490410300d66f84"
                            }
                        }, {
                            "$id": "9796713fa4fdd2949df0c8031df2aa2f",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "AllSdiTable",
                            "context": {
                                "queryResultId": "57cfe2b03490410300d66f89",
                                "script": [{
                                    "shortName": "Select AllSDI(57cfe2753490410300d66f84)",
                                    "select": {
                                        "source": "AllSDI"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Rank A-Z for Rows(Quality of Life Component,Security of Life Component,Index of economic dimension,Index of environmental dimension,Index of social and institutional dimension,Index of sustainable development)",
                                    "rank": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "indexes": [0, 1, 2, 3, 4, 5]
                                    }
                                }, {
                                    "shortName": "Use Column Metadata(Indicator,Type)",
                                    "useColumnMetadata": [true, true]
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "4c4ad4d4d064c37a47f25d6bd79aa61b",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Threats",
                            "context": {
                                "query": {
                                    "commitID": "57d17a74d6df410300017130",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "57d17d8ad6df410300017133"
                            }
                        }, {
                            "$id": "817222cce1fd565fd16ae54a2ceeb494",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "ThreatChoose",
                            "context": {
                                "queryResultId": "57d17de3d6df410300017136",
                                "script": [{
                                    "shortName": "Select Threats(57d17d8ad6df410300017133)",
                                    "select": {
                                        "source": "Threats"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "ff8d67256ca5682eef5fc63947cfc9c1",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "TreatsTable",
                            "context": {
                                "queryResultId": "57d17ed5d6df410300017140",
                                "script": [{
                                    "shortName": "Select Threats(57d17d8ad6df410300017133)",
                                    "select": {
                                        "source": "Threats"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Rank A-Z for Rows(Global Warming,Biological Balance,Child Mortality,Corruption Perception,Energy Security,Global  Diseases,Conflict Intensity,Natural Disasters,Prolifiration Index,Inequality of Population Income (Gini coefficient),State Fragility,Water Access)",
                                    "rank": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "indexes": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                                    }
                                }, {
                                    "shortName": "Use Column Metadata(Indicator,Type)",
                                    "useColumnMetadata": [true, true]
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "5cdfc0f57359a89e8098df18aa99e3c5",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Isd2016",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Split Columns",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5827456f92a35f04008e24a3"
                            }
                        }, {
                            "$id": "23f8494db97370708fed390b4e126fcb",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "ClustIsd2016",
                            "context": {
                                "queryResultId": "582746ba92a35f04008e24ae",
                                "script": [{
                                    "shortName": "Select Isd2016(5827456f92a35f04008e24a3)",
                                    "select": {
                                        "source": "Isd2016"
                                    }
                                }, {
                                    "shortName": "Sort Rows Z-A order by Index of sustainable development.2015-01-01T00:00:00.000Z",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "Z-A",
                                        "index": "0"
                                    }
                                }, {
                                    "shortName": "Use Column Metadata(Indicator)",
                                    "useColumnMetadata": [true, false]
                                }, {
                                    "shortName": "Clusters (4) for Rows",
                                    "cluster": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "count": 4
                                    }
                                }, {
                                    "shortName": "Rank A-Z for Rows(Index of sustainable development)",
                                    "rank": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "indexes": [0]
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Use Column Metadata(Indicator,Type)",
                                    "useColumnMetadata": [true, true]
                                }]
                            }
                        }, {
                            "$id": "22bafce4433c819687c0932941b3900e",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CqlDim2016",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["Is", "Iec", "Ie"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5827476c92a35f04008e24b8"
                            }
                        }, {
                            "$id": "6b04cc33723c88a07c0a3f60ac1dacb5",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CqlDim2016form",
                            "context": {
                                "queryResultId": "582747a392a35f04008e24ba",
                                "script": [{
                                    "shortName": "Select CqlDim2016(5827476c92a35f04008e24b8)",
                                    "select": {
                                        "source": "CqlDim2016"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "5f258e09bbbd05bc312d443c4d204bee",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CqlDim2016",
                            "context": {
                                "query": {
                                    "commitID": "582737fb92a35f04008e2492",
                                    "datasetID": "acf7b810-a8ed-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": []
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "58274a1c92a35f04008e24c0"
                            }
                        }, {
                            "$id": "2d9b727c2381c42653f7972995b34482",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CqlDim2016obr",
                            "context": {
                                "queryResultId": "58274a7392a35f04008e24c4",
                                "script": [{
                                    "shortName": "Select CqlDim2016(58274a1c92a35f04008e24c0)",
                                    "select": {
                                        "source": "CqlDim2016"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Indicator",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "ef2cb3f3a9efea91512cd0583a8b34a8",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "AllIsd2016",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Columns",
                                        "collection": ["G", "Isd", "Csl", "Cql", "Is", "Iec", "Ie"]
                                    }, {
                                        "dimension": "year",
                                        "role": "time",
                                        "collection": ["2015"]
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "58274b8d92a35f04008e24cb"
                            }
                        }, {
                            "$id": "b0583136dd27e3d025219c6186359829",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "AllIsd2016obr",
                            "context": {
                                "queryResultId": "58274bb792a35f04008e24cf",
                                "script": [{
                                    "shortName": "Select AllIsd2016(58274b8d92a35f04008e24cb)",
                                    "select": {
                                        "source": "AllIsd2016"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Indicator",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "7e5c85d6daf29dc861a275c680493f3a",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "Corr",
                            "context": {
                                "queryResultId": "58275c7292a35f04008e2514",
                                "script": [{
                                    "shortName": "Select CqlDim2016(58274a1c92a35f04008e24c0)",
                                    "select": {
                                        "source": "CqlDim2016"
                                    }
                                }, {
                                    "shortName": "Correlations for Columns",
                                    "correlation": {
                                        "enable": true,
                                        "direction": "Columns"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }]
                    }],
                    "width": 1200
                }
            },
            "subscriptions": [{
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectObject",
                "receiver": "6k2kc8qodfiokdt1l6ysulq5mi"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectObject",
                "receiver": "vx417ltllilhxzhmpjru23xr"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectObject",
                "receiver": "lig1svb34031a1vuyaj6y9zfr"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "56h77ggw7z832phxtlpszl4n29"
            }, {
                "emitter": "selector",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "25d5b7cbnaqzg1yzfzgqruow29"
            }, {
                "emitter": "sel",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "egoai0ni6nm0bz34ip2m8zd7vi"
            }, {
                "emitter": "sel2",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "fu5zsygwnpnzkey1tdt68byb9"
            }, {
                "emitter": "sel",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "nwb2mjpzdro845dyn0q060f6r"
            }, {
                "emitter": "sel2",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "bviqnfmjvcarrn0unk0ara4i"
            }]
        }, {
            "shortTitle": "Trend SDI world profiles",
            "href": "sdiprofiles",
            "template": "2-cols",
            "holders": {
                "column": {
                    "widgets": [{
                        "enabled": true,
                        "bgImage": "http://wdc.org.ua/sites/default/themes/ninesixtyrobots/images/header.png",
                        "type": "v2.banner",
                        "instanceName": "olqladajctznojty4ebl0udi",
                        "icon": "/widgets/v2.banner/icon.png"
                    }, {
                        "title": "Trend SDI world profiles",
                        "intro": "Compare countries by analyzing their SDI trends",
                        "text": "",
                        "type": "html-article",
                        "instanceName": "sodgjj45n13yxoayt5wl2qpvi",
                        "icon": "/widgets/html-article/icon.png"
                    }, {
                        "type": "v2.data-selector",
                        "instanceName": "selec",
                        "icon": "/widgets/v2.data-selector/icon.png",
                        "decoration": {
                            "direction": "Rows",
                            "meta": {
                                "key": "Country",
                                "index": 0
                            },
                            "view": "Typeahead",
                            "title": "Start type to choose countries"
                        },
                        "queryID": "6567fec93e400c9a12e1f24e2d5c3fa9",
                        "dataID": "582824d14292ba040034ae66"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "fiexzu1a9rvwlvui4q63xwp14i",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "Index of Sustainable Development",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 1200
                        },
                        "serieDataId": "5828269e4292ba040034ae6c",
                        "queryID": "665bbff45f29e91c1c0b193b4bb72720",
                        "dataID": "582826444292ba040034ae6a",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "pc08ob3235uzjg0tqrh5xw29",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "Component of Quality of Life",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 1200
                        },
                        "serieDataId": "582833484292ba040034ae8d",
                        "queryID": "53b8da3c792298df4f2aedfb3d0ad5bc",
                        "dataID": "582832664292ba040034ae86",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "tudzphk85thn3d770elqy3nmi",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "Component of Security of Life",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 1200
                        },
                        "serieDataId": "582833d64292ba040034ae8f",
                        "queryID": "cadb6c261adfb96deb76800d9aaf3280",
                        "dataID": "5828329c4292ba040034ae8b",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }],
                    "width": 1200
                },
                "left": {
                    "widgets": [{
                        "text": "<p style=\"text-align: center; \" class=\"\"><font size=\"6\">Dimensions of Quality of Life</font></p>",
                        "type": "htmlwidget",
                        "instanceName": "xlqrc5wjoywueodphyymhd7vi",
                        "icon": "/widgets/htmlwidget/icon.png"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "rlew5co6g7qlf340ojhh0k9",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "Index of economic dimension",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 659
                        },
                        "serieDataId": "582838014292ba040034aeb3",
                        "queryID": "77680e0c10e9416f1ce83c1a224ad0e4",
                        "dataID": "582836894292ba040034aea1",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "t5wa001ime8rtw2hhuf28olxr",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "Index of environmental dimension",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 659
                        },
                        "serieDataId": "582838334292ba040034aeb5",
                        "queryID": "f788631aa8a3b8b61f94bf69203b2a16",
                        "dataID": "582834884292ba040034ae94",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "ly7v0g324v72t1xm2jzto6r",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "Index of social and institutional dimension",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 659
                        },
                        "serieDataId": "5828388f4292ba040034aeb7",
                        "queryID": "580f00f0c6e03e7016cd88032996d171",
                        "dataID": "582836514292ba040034ae9c",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }],
                    "width": 659
                },
                "right": {
                    "widgets": [{
                        "text": "<p style=\"text-align: center; \" class=\"\"><font size=\"6\">Global Threats</font></p>",
                        "type": "htmlwidget",
                        "instanceName": "70twcr81r4glzsrvc5t2csor",
                        "icon": "/widgets/htmlwidget/icon.png"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "3e5isuyyx3c8snaz6r996bt9",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "State fragility",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 659
                        },
                        "serieDataId": "58283f3e4292ba040034aebc",
                        "queryID": "750b997a5ee676baa40132ad90a1e8e6",
                        "dataID": "582837434292ba040034aeb0",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "ps2ton3oylb8rblupsd5tgldi",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "Prolifiration index",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 659
                        },
                        "serieDataId": "58283fd84292ba040034aebe",
                        "queryID": "795f9f511ba06fb373eaf19728b3bc01",
                        "dataID": "582836c64292ba040034aea6",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }, {
                        "type": "v2.nvd3-line",
                        "instanceName": "lqr1rjc1tvrpsoiq9ie2vs4i",
                        "icon": "/widgets/v2.nvd3-line/icon.png",
                        "decoration": {
                            "height": 250,
                            "title": "Child Mortality",
                            "subtitle": "",
                            "caption": "",
                            "xAxisName": "Year",
                            "yAxisName": "Value",
                            "xAxisAngle": 0,
                            "reduceXTicks": false,
                            "staggerLabels": false,
                            "interpolation": "linear",
                            "showPoints": true,
                            "showLabels": false,
                            "width": 659
                        },
                        "serieDataId": "582840844292ba040034aec7",
                        "queryID": "0d193781bb1da1258e133df3d4c18ecb",
                        "dataID": "582840514292ba040034aec5",
                        "axisX": -1,
                        "index": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136],
                        "emitters": "selec.selectObject.selectSerie"
                    }, {
                        "type": "v2.query-manager",
                        "instanceName": "5ju9gak9r2kwkmezrel1bgldi",
                        "icon": "/widgets/v2.query-manager/icon.png",
                        "queries": [{
                            "$id": "beaf622830278d62dfa0534ef4b34dc5",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Isd",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["Isd"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "58275b7292a35f04008e2511"
                            }
                        }, {
                            "$id": "6567fec93e400c9a12e1f24e2d5c3fa9",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "IsdForm",
                            "context": {
                                "queryResultId": "582824d14292ba040034ae66",
                                "script": [{
                                    "shortName": "Select Isd(58275b7292a35f04008e2511)",
                                    "select": {
                                        "source": "Isd"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }]
                            }
                        }, {
                            "$id": "665bbff45f29e91c1c0b193b4bb72720",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "IsdGraph",
                            "context": {
                                "queryResultId": "582826444292ba040034ae6a",
                                "script": [{
                                    "shortName": "Select IsdForm(582824d14292ba040034ae66)",
                                    "select": {
                                        "source": "IsdForm"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "fa631ee45bb144484c0015f91f061158",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Cql",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["Cql"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "58282f9b4292ba040034ae70"
                            }
                        }, {
                            "$id": "472d9526b747e180b3a30265698f6a78",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Csl",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["Csl"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "58282fed4292ba040034ae73"
                            }
                        }, {
                            "$id": "39c0a763cd1e13d0a8ea51b5f8017944",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Is",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["Is"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "582830c04292ba040034ae76"
                            }
                        }, {
                            "$id": "641c4b50282e677abbbb4b9afaa3451a",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Iec",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["Iec"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "582830f64292ba040034ae78"
                            }
                        }, {
                            "$id": "1caed7873c8a3eb8fd07f085826fc589",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "PI",
                            "context": {
                                "query": {
                                    "commitID": "582737fb92a35f04008e2492",
                                    "datasetID": "acf7b810-a8ed-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["NI"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "582831364292ba040034ae7a"
                            }
                        }, {
                            "$id": "f85dfbb645d513befc3fb48a185aeaa2",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "Ie",
                            "context": {
                                "query": {
                                    "commitID": "58273e8f92a35f04008e2499",
                                    "datasetID": "f9a08490-a8f1-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "Ignore",
                                        "collection": ["Ie"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "582831814292ba040034ae7d"
                            }
                        }, {
                            "$id": "6a303c9ad35ef9477b23ac10f0860c11",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CP",
                            "context": {
                                "query": {
                                    "commitID": "582737fb92a35f04008e2492",
                                    "datasetID": "acf7b810-a8ed-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["CP"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "582831ad4292ba040034ae7f"
                            }
                        }, {
                            "$id": "9063c9600791b73c2b9e8e4604dcb441",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "SF",
                            "context": {
                                "query": {
                                    "commitID": "582737fb92a35f04008e2492",
                                    "datasetID": "acf7b810-a8ed-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["WBSF"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5828320c4292ba040034ae81"
                            }
                        }, {
                            "$id": "53b8da3c792298df4f2aedfb3d0ad5bc",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CqlGraph",
                            "context": {
                                "queryResultId": "582832664292ba040034ae86",
                                "script": [{
                                    "shortName": "Select Cql(58282f9b4292ba040034ae70)",
                                    "select": {
                                        "source": "Cql"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "cadb6c261adfb96deb76800d9aaf3280",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CslGraph",
                            "context": {
                                "queryResultId": "5828329c4292ba040034ae8b",
                                "script": [{
                                    "shortName": "Select Csl(58282fed4292ba040034ae73)",
                                    "select": {
                                        "source": "Csl"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "f788631aa8a3b8b61f94bf69203b2a16",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "IeGraph",
                            "context": {
                                "queryResultId": "582834884292ba040034ae94",
                                "script": [{
                                    "shortName": "Select Ie(582831814292ba040034ae7d)",
                                    "select": {
                                        "source": "Ie"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "580f00f0c6e03e7016cd88032996d171",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "IsGraph",
                            "context": {
                                "queryResultId": "582836514292ba040034ae9c",
                                "script": [{
                                    "shortName": "Select Is(582830c04292ba040034ae76)",
                                    "select": {
                                        "source": "Is"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "77680e0c10e9416f1ce83c1a224ad0e4",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "IecGraph",
                            "context": {
                                "queryResultId": "582836894292ba040034aea1",
                                "script": [{
                                    "shortName": "Select Iec(582830f64292ba040034ae78)",
                                    "select": {
                                        "source": "Iec"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "795f9f511ba06fb373eaf19728b3bc01",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "PIGraph",
                            "context": {
                                "queryResultId": "582836c64292ba040034aea6",
                                "script": [{
                                    "shortName": "Select PI(582831364292ba040034ae7a)",
                                    "select": {
                                        "source": "PI"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "31ccf6d719ae686fd576b7640dfc51d6",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CPGraph",
                            "context": {
                                "queryResultId": "582837004292ba040034aeab",
                                "script": [{
                                    "shortName": "Select CP(582831ad4292ba040034ae7f)",
                                    "select": {
                                        "source": "CP"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "750b997a5ee676baa40132ad90a1e8e6",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "SFGraph",
                            "context": {
                                "queryResultId": "582837434292ba040034aeb0",
                                "script": [{
                                    "shortName": "Select SF(5828320c4292ba040034ae81)",
                                    "select": {
                                        "source": "SF"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }, {
                            "$id": "b69b6bf14035e28090da5cfaecdd54f7",
                            "$listeners": 0,
                            "$type": "projection",
                            "$title": "CM",
                            "context": {
                                "query": {
                                    "commitID": "582737fb92a35f04008e2492",
                                    "datasetID": "acf7b810-a8ed-11e6-b03f-877a4a04a186",
                                    "query": [{
                                        "dimension": "country",
                                        "role": "Rows",
                                        "collection": []
                                    }, {
                                        "dimension": "concept",
                                        "role": "metric",
                                        "collection": ["CM5"]
                                    }, {
                                        "dimension": "year",
                                        "role": "Columns",
                                        "collection": []
                                    }],
                                    "locale": "en"
                                },
                                "queryResultId": "5828401a4292ba040034aec0"
                            }
                        }, {
                            "$id": "0d193781bb1da1258e133df3d4c18ecb",
                            "$listeners": 0,
                            "$type": "preparation",
                            "$title": "CMGraph",
                            "context": {
                                "queryResultId": "582840514292ba040034aec5",
                                "script": [{
                                    "shortName": "Select CM(5828401a4292ba040034aec0)",
                                    "select": {
                                        "source": "CM"
                                    }
                                }, {
                                    "shortName": "Sort Rows A-Z order by Country",
                                    "order": {
                                        "enable": true,
                                        "direction": "Rows",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Sort Columns A-Z order by Year",
                                    "order": {
                                        "enable": true,
                                        "direction": "Columns",
                                        "asc": "A-Z",
                                        "index": "-1"
                                    }
                                }, {
                                    "shortName": "Number precision: 3",
                                    "precision": 3
                                }, {
                                    "shortName": "Transpose",
                                    "transpose": true
                                }]
                            }
                        }]
                    }],
                    "width": 659
                }
            },
            "subscriptions": [{
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "fiexzu1a9rvwlvui4q63xwp14i"
            }, {
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "pc08ob3235uzjg0tqrh5xw29"
            }, {
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "tudzphk85thn3d770elqy3nmi"
            }, {
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "rlew5co6g7qlf340ojhh0k9"
            }, {
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "t5wa001ime8rtw2hhuf28olxr"
            }, {
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "ly7v0g324v72t1xm2jzto6r"
            }, {
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "3e5isuyyx3c8snaz6r996bt9"
            }, {
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "ps2ton3oylb8rblupsd5tgldi"
            }, {
                "emitter": "selec",
                "signal": "selectObject",
                "slot": "selectSerie",
                "receiver": "lqr1rjc1tvrpsoiq9ie2vs4i"
            }]
        }],
        "name": "SDI",
        "i18n": {
            "uk": {
                "appName": "Сталий розвиток",
                "lanMethod": "Методологія",
                "lanSust": "Сталий розвиток 2015",
                "lanMethMenu": "/app/SDI/methodology",
                "lanDinEu": "Динаміка індексу сталого розвитку для країн Європи",
                "Ірландія": "Ірландія"
            },
            "en": {
                "appName": "Sustainable development",
                "lanMethod": "Methodology",
                "lanSust": "Sustainable development 2015",
                "lanMethMenu": "/app/SDI/methodology",
                "lanDinEu": "Sustainable index dynamics for Europe",
                "Ірландія": "Ireland"
            },
            "ru": {
                "appName": "Сталий розвиток",
                "lanMethod": "Методологія",
                "lanSust": "Сталий розвиток 2015",
                "lanMethMenu": "/app/SDI/methodology",
                "lanDinEu": "Динаміка індексу сталого розвитку для країн Європи",
                "Ірландія": "Ірландія"
            }
        },
        "icon": "./api/resource/wdc-wdc.png",
        "dps": "https://dj-dps.herokuapp.com",
        "importedFromURL": "http://open.wdc.org.ua/app/SDI",
        "importedFromAuthor": "Ivan Pyshnograiev"
    } ?
    >
