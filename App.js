import React from "react";
import ReactDOM from "react-dom/client";

/*
Food-Order Delivery App Low-level Design:
Header
 - Logo
 - Nav links (Home, About, Cart)
Main Content
 - Search
 - Restaurant cards
Footer
 - Address and additional Info
*/

const restaurantList = [
    {
        "type": "restaurant",
        "info": {
            "resId": 18918689,
            "name": "The Hot Breads Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/18918689/37073ac5e9558ef9446716feb73715f4_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/18918689/37073ac5e9558ef9446716feb73715f4_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "34.6K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.4",
                        "reviewCount": "130",
                        "reviewTextSmall": "130 Reviews",
                        "subtext": "130 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "34.4K",
                        "reviewTextSmall": "34.4K Reviews",
                        "subtext": "34.4K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "Plot 6, Block 10, Prakash Plaza, Infantry Road, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        "order": {
            "deliveryTime": "24 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/the-hot-breads-restaurant-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/the-hot-breads-restaurant-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18918689\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21809986,
            "name": "Bento Cakery",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/21809986/6750d961753a09543dbceeef6dc8df84_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/21809986/6750d961753a09543dbceeef6dc8df84_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "465",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "2",
                        "reviewTextSmall": "2 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.7",
                        "reviewCount": "463",
                        "reviewTextSmall": "463 Reviews",
                        "subtext": "463 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "41-1-9-34, Rahimabad Colony, Ward 34, Infantry Road, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/bakery/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/sandwich/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        "order": {
            "deliveryTime": "23 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/bento-cakery-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/bento-cakery-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.9 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21809986\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20565816,
            "name": "Anushree Family Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/20565816/5efce8d9dbb1a87ed8aca54d5528c10e_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/20565816/5efce8d9dbb1a87ed8aca54d5528c10e_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "2,628",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "4",
                        "reviewTextSmall": "4 Reviews",
                        "subtext": "4 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "2,624",
                        "reviewTextSmall": "2,624 Reviews",
                        "subtext": "2,624 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "Anushree Family Restaurant, Gandhi Nagar, Main Road, Corporation Ward No.21, , Property No.5-1-506-161, Opp. MBSL High School, Moka Road,  Bellary, Karnataka - 583101, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 15 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/sea-food/",
                    "name": "Seafood"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        "order": {
            "deliveryTime": "22 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/anushree-family-restaurant-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/anushree-family-restaurant-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20565816\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20821633,
            "name": "A1 Biryani Center",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20821633/05d67b28112ce3c6239a446124dc6d33_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20821633/05d67b28112ce3c6239a446124dc6d33_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "844",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "844",
                        "reviewTextSmall": "844 Reviews",
                        "subtext": "844 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹250 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "Ankallamma Street, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "18 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/a1-biryani-center-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/a1-biryani-center-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20821633\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "10% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18918242,
            "name": "Lassi Shop",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/2/18918242/e7d7674c11e17492552ed9103d8cbf0f_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/2/18918242/e7d7674c11e17492552ed9103d8cbf0f_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "18.1K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "18.1K",
                        "reviewTextSmall": "18.1K Reviews",
                        "subtext": "18.1K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "Mothi Circle, Opposite Buda Complex, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/juices/",
                    "name": "Juices"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/ice-cream/",
                    "name": "Ice Cream"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "14 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/lassi-shop-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/lassi-shop-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "215 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18918242\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18918314,
            "name": "Roll Planet",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/4/18918314/f4d62317e0a5623037689718fef1c119_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/4/18918314/f4d62317e0a5623037689718fef1c119_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "13.5K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "13.5K",
                        "reviewTextSmall": "13.5K Reviews",
                        "subtext": "13.5K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "Shop 2 & 3, Vidya Nagar, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/rolls/",
                    "name": "Rolls"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "25 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/roll-planet-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/roll-planet-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18918314\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19651956,
            "name": "Chickpet Donne Biryani House",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19651956/1deeb650792954cdee073dd08703f3f9_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19651956/1deeb650792954cdee073dd08703f3f9_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "2,978",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "10",
                        "reviewTextSmall": "10 Reviews",
                        "subtext": "10 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "2,968",
                        "reviewTextSmall": "2,968 Reviews",
                        "subtext": "2,968 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹350 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "Plot 75/2, W 20, TGVS Nagar, Opposite Water Booster, Moka Road, Bellary, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "Opens on Wednesday at 11:30am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/south-indian/",
                    "name": "South Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "24 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/chickpet-donne-biryani-house-1-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/chickpet-donne-biryani-house-1-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19651956\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20864788,
            "name": "The Belgian Waffle Co.",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/8/20864788/33577c3c5af9c43de9af04ecb8e401e6_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/8/20864788/33577c3c5af9c43de9af04ecb8e401e6_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "653",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "650",
                        "reviewTextSmall": "650 Reviews",
                        "subtext": "650 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "Ground Floor, A Part, Sri Lakshmi Plaza, Infantry Road, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2N1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/waffle/",
                    "name": "Waffle"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2OFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/pancake/",
                    "name": "Pancake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/ice-cream/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/the-belgian-waffle-co-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/the-belgian-waffle-co-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20864788\",\"element_type\":\"listing\",\"rank\":8}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20711763,
            "name": "Polar Bear Ice Cream Sundaes",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20711763/3ec37875f72ea4d63cd2ccc145c3ab99_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20711763/3ec37875f72ea4d63cd2ccc145c3ab99_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "2,129",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "8",
                        "reviewTextSmall": "8 Reviews",
                        "subtext": "8 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.7",
                        "reviewCount": "2,121",
                        "reviewTextSmall": "2,121 Reviews",
                        "subtext": "2,121 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "48470, 5th Cross, Devinagar, Ward 34, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/ice-cream/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        "order": {
            "deliveryTime": "21 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/polar-bear-ice-cream-sundaes-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/polar-bear-ice-cream-sundaes-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20711763\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19137923,
            "name": "Aahar Udupi Pure Veg",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/19137923/69022b1b14f021128473c5f1f088d29b_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/19137923/69022b1b14f021128473c5f1f088d29b_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "18.7K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "39",
                        "reviewTextSmall": "39 Reviews",
                        "subtext": "39 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "18.7K",
                        "reviewTextSmall": "18.7K Reviews",
                        "subtext": "18.7K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹150 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "46/C, 31, Sanjay Gandhi Nagar, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "24 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/aahar-udupi-pure-veg-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/aahar-udupi-pure-veg-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19137923\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19067906,
            "name": "Renuka'S Kitchen",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19067906/102f66fdca229732483c2d5ecafd16f5_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19067906/102f66fdca229732483c2d5ecafd16f5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "15.6K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "15.6K",
                        "reviewTextSmall": "15.6K Reviews",
                        "subtext": "15.6K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "Renuka&#039;s kitchen, Moka Road Gandhi Nagar Bellary, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/juices/",
                    "name": "Juices"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "23 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/renukas-kitchen-1-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/renukas-kitchen-1-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19067906\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat 20% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19523947,
            "name": "Lassi & More Infantry Road",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/19523947/2d1faae12e1bf4f9e79f22a50b4d2331_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/19523947/2d1faae12e1bf4f9e79f22a50b4d2331_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "3,360",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "3,357",
                        "reviewTextSmall": "3,357 Reviews",
                        "subtext": "3,357 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹100 for two"
            },
            "cfo": {
                "text": "₹40 for one"
            },
            "locality": {
                "name": "Bellary Locality, Bellary",
                "address": "MIG, Nethaji Nagar, Opposite Vasavi School, Infantry Road, Bellary Locality, Bellary",
                "localityUrl": "bellary/bellary-locality-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/bellary/restaurants/ice-cream/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/bellary/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹40 for one"
            }
        },
        "order": {
            "deliveryTime": "26 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/bellary/lassi-more-infantry-road-bellary-locality/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/bellary/lassi-more-infantry-road-bellary-locality/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"043145f2-56c8-4e06-a829-5e659165cb4f\",\"location_type\":\"delivery_cell\",\"location_id\":\"4302927065474138112\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19523947\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹100 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    }
]


const Header = () => {
    return(
        <div className="headContainer">
            <div>
                <img className="logo"  alt="🍌"></img>
            </div>
            <div className="navLinks">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCards = ( props) => {
    const {resData} = props; // Destructuring the Props
    const {name, image, rating, cuisine} = resData?.info;    // Destructuring the Props & Optional Chaining
    return(
        <div className="restaurantCards">
            <div className="card">
                <img className="card-img" src={image.url} alt="🍔"></img>
                <h3>{name}</h3>
                <p>Rating: {rating.aggregate_rating}</p>
                <p> {cuisine.map((cuisine) => cuisine.name).join(", ")}</p>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className="bodyContainer">
            <div className="searchContainer">   
                <input type="text" placeholder="Search for restaurants..."/>
                <button>Search</button>
            </div>
            <div className="restaurantGrid">
                {restaurantList.map((restaurant) => <RestaurantCards key={restaurant.info.resId} resData = {restaurant} /> )}
                
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="appContainer">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
