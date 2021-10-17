import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./helper/navbar";
import { useFonts, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import ConsumptionOverview from "./helper/consumptionOverview";
import ProductCard from "./helper/productCard";
import { productInterface } from "../../TS helper files/productInterface";
import BottomBar from "./helper/bottomBar";
import { useAlg } from "../../context/cartContext";
const HomeScreen2 = () => {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
  });
  let data2 = [
    {
      id: "20434567001",
      name: "Almond Nougat, Assorted",
      company: "GBON",
      product_description: "",
      nutrition: {
        food_name: "almond",
        brand_name: null,
        serving_qty: 1,
        serving_unit: "almond",
        serving_weight_grams: 1.29,
        nf_calories: 7.71,
        nf_total_fat: 0.68,
        nf_saturated_fat: 0.05,
        nf_cholesterol: 0,
        nf_sodium: 6.42,
        nf_total_carbohydrate: 0.27,
        nf_dietary_fiber: 0.14,
        nf_sugars: 0.06,
        nf_protein: 0.27,
        nf_potassium: 9.2,
        nf_p: 6.08,
        full_nutrients: [
          {
            attr_id: 203,
            value: 0.2704,
          },
          {
            attr_id: 204,
            value: 0.6778,
          },
          {
            attr_id: 205,
            value: 0.271,
          },
          {
            attr_id: 207,
            value: 0.0396,
          },
          {
            attr_id: 208,
            value: 7.7142,
          },
          {
            attr_id: 209,
            value: 0.0094,
          },
          {
            attr_id: 210,
            value: 0.0613,
          },
          {
            attr_id: 211,
            value: 0.0001,
          },
          {
            attr_id: 212,
            value: 0.0001,
          },
          {
            attr_id: 213,
            value: 0,
          },
          {
            attr_id: 214,
            value: 0.0012,
          },
          {
            attr_id: 221,
            value: 0,
          },
          {
            attr_id: 255,
            value: 0.0311,
          },
          {
            attr_id: 262,
            value: 0,
          },
          {
            attr_id: 263,
            value: 0,
          },
          {
            attr_id: 268,
            value: 32.2758,
          },
          {
            attr_id: 269,
            value: 0.0627,
          },
          {
            attr_id: 287,
            value: 0,
          },
          {
            attr_id: 291,
            value: 0.1406,
          },
          {
            attr_id: 301,
            value: 3.4572,
          },
          {
            attr_id: 303,
            value: 0.0481,
          },
          {
            attr_id: 304,
            value: 3.5991,
          },
          {
            attr_id: 305,
            value: 6.0759,
          },
          {
            attr_id: 306,
            value: 9.1977,
          },
          {
            attr_id: 307,
            value: 6.4242,
          },
          {
            attr_id: 309,
            value: 0.0427,
          },
          {
            attr_id: 312,
            value: 0.0142,
          },
          {
            attr_id: 315,
            value: 0.0288,
          },
          {
            attr_id: 317,
            value: 0.0258,
          },
          {
            attr_id: 318,
            value: 0.0129,
          },
          {
            attr_id: 319,
            value: 0,
          },
          {
            attr_id: 320,
            value: 0,
          },
          {
            attr_id: 321,
            value: 0.0129,
          },
          {
            attr_id: 322,
            value: 0,
          },
          {
            attr_id: 323,
            value: 0.3083,
          },
          {
            attr_id: 324,
            value: 0,
          },
          {
            attr_id: 328,
            value: 0,
          },
          {
            attr_id: 334,
            value: 0,
          },
          {
            attr_id: 337,
            value: 0,
          },
          {
            attr_id: 338,
            value: 0.0129,
          },
          {
            attr_id: 341,
            value: 0.0041,
          },
          {
            attr_id: 342,
            value: 0.0093,
          },
          {
            attr_id: 343,
            value: 0.0012,
          },
          {
            attr_id: 401,
            value: 0,
          },
          {
            attr_id: 404,
            value: 0.001,
          },
          {
            attr_id: 405,
            value: 0.0154,
          },
          {
            attr_id: 406,
            value: 0.0469,
          },
          {
            attr_id: 410,
            value: 0.0041,
          },
          {
            attr_id: 415,
            value: 0.0018,
          },
          {
            attr_id: 417,
            value: 0.7095,
          },
          {
            attr_id: 418,
            value: 0,
          },
          {
            attr_id: 421,
            value: 0.6721,
          },
          {
            attr_id: 430,
            value: 0,
          },
          {
            attr_id: 431,
            value: 0,
          },
          {
            attr_id: 432,
            value: 0.7095,
          },
          {
            attr_id: 435,
            value: 0.7095,
          },
          {
            attr_id: 501,
            value: 0.0027,
          },
          {
            attr_id: 502,
            value: 0.0077,
          },
          {
            attr_id: 503,
            value: 0.0096,
          },
          {
            attr_id: 504,
            value: 0.0189,
          },
          {
            attr_id: 505,
            value: 0.0073,
          },
          {
            attr_id: 506,
            value: 0.002,
          },
          {
            attr_id: 507,
            value: 0.0028,
          },
          {
            attr_id: 508,
            value: 0.0145,
          },
          {
            attr_id: 509,
            value: 0.0058,
          },
          {
            attr_id: 510,
            value: 0.0109,
          },
          {
            attr_id: 511,
            value: 0.0315,
          },
          {
            attr_id: 512,
            value: 0.0069,
          },
          {
            attr_id: 513,
            value: 0.0128,
          },
          {
            attr_id: 514,
            value: 0.0338,
          },
          {
            attr_id: 515,
            value: 0.0794,
          },
          {
            attr_id: 516,
            value: 0.0183,
          },
          {
            attr_id: 517,
            value: 0.0124,
          },
          {
            attr_id: 518,
            value: 0.0117,
          },
          {
            attr_id: 521,
            value: 0.0005,
          },
          {
            attr_id: 601,
            value: 0,
          },
          {
            attr_id: 605,
            value: 0.0001,
          },
          {
            attr_id: 606,
            value: 0.0528,
          },
          {
            attr_id: 607,
            value: 0,
          },
          {
            attr_id: 608,
            value: 0,
          },
          {
            attr_id: 609,
            value: 0,
          },
          {
            attr_id: 610,
            value: 0,
          },
          {
            attr_id: 611,
            value: 0,
          },
          {
            attr_id: 612,
            value: 0.0003,
          },
          {
            attr_id: 613,
            value: 0.0432,
          },
          {
            attr_id: 614,
            value: 0.0091,
          },
          {
            attr_id: 615,
            value: 0.0001,
          },
          {
            attr_id: 617,
            value: 0.4225,
          },
          {
            attr_id: 618,
            value: 0.167,
          },
          {
            attr_id: 619,
            value: 0.0001,
          },
          {
            attr_id: 620,
            value: 0,
          },
          {
            attr_id: 621,
            value: 0,
          },
          {
            attr_id: 624,
            value: 0,
          },
          {
            attr_id: 625,
            value: 0,
          },
          {
            attr_id: 626,
            value: 0.0033,
          },
          {
            attr_id: 627,
            value: 0,
          },
          {
            attr_id: 628,
            value: 0.0001,
          },
          {
            attr_id: 629,
            value: 0,
          },
          {
            attr_id: 630,
            value: 0,
          },
          {
            attr_id: 631,
            value: 0,
          },
          {
            attr_id: 638,
            value: 0.0516,
          },
          {
            attr_id: 639,
            value: 0.0516,
          },
          {
            attr_id: 641,
            value: 1.5738,
          },
          {
            attr_id: 645,
            value: 0.4267,
          },
          {
            attr_id: 646,
            value: 0.1671,
          },
          {
            attr_id: 652,
            value: 0,
          },
          {
            attr_id: 653,
            value: 0.0002,
          },
          {
            attr_id: 654,
            value: 0,
          },
          {
            attr_id: 663,
            value: 0.0001,
          },
          {
            attr_id: 671,
            value: 0,
          },
          {
            attr_id: 672,
            value: 0,
          },
          {
            attr_id: 674,
            value: 0.4225,
          },
          {
            attr_id: 675,
            value: 0.167,
          },
          {
            attr_id: 685,
            value: 0,
          },
          {
            attr_id: 687,
            value: 0.0007,
          },
          {
            attr_id: 689,
            value: 0,
          },
          {
            attr_id: 696,
            value: 0,
          },
          {
            attr_id: 697,
            value: 0,
          },
          {
            attr_id: 851,
            value: 0.0001,
          },
        ],
        nix_brand_name: null,
        nix_brand_id: null,
        nix_item_name: null,
        nix_item_id: null,
        upc: null,
        consumed_at: "2021-10-17T01:19:21+00:00",
        metadata: {
          is_raw_food: false,
        },
        source: 1,
        ndb_no: 12563,
        tags: {
          item: "salted almond",
          measure: null,
          quantity: "1.0",
          food_group: 9,
          tag_id: 140,
        },
        alt_measures: [
          {
            serving_weight: 28.35,
            measure: "oz (22 whole kernels)",
            seq: 2,
            qty: 1,
          },
          {
            serving_weight: 138,
            measure: "cup whole kernels",
            seq: 1,
            qty: 1,
          },
          {
            serving_weight: 1.29,
            measure: "almond",
            seq: 80,
            qty: 1,
          },
          {
            serving_weight: 100,
            measure: "g",
            seq: null,
            qty: 100,
          },
          {
            serving_weight: 28.3495,
            measure: "wt. oz",
            seq: null,
            qty: 1,
          },
        ],
        lat: null,
        lng: null,
        meal_type: 5,
        photo: {
          thumb: "https://nix-tag-images.s3.amazonaws.com/140_thumb.jpg",
          highres: "https://nix-tag-images.s3.amazonaws.com/140_highres.jpg",
          is_user_uploaded: false,
        },
        sub_recipe: null,
        class_code: null,
        brick_code: null,
        tag_id: null,
      },
      rating: null,
    },
    {
      id: "20319300002",
      name: "Vanilla Ice Cream",
      company: "P",
      product_description:
        "A classic vanilla ice cream is rich, sweet and velvety… it never disappoints. But can we take a moment to appreciate its versatility? Who can decide whether it’s best in a bowl with balsamic-glazed strawberry slices and chocolate sauce – or slathered on a warm chocolate chip cookie? How about nestled on pies and tarts – or dunked in a root beer float?  We also won’t argue with purists who insist it’s best on its own. As if you needed any more reasons to enjoy some ice cream.",
      nutrition: {
        food_name: "vanilla ice cream",
        brand_name: null,
        serving_qty: 1,
        serving_unit: "cup",
        serving_weight_grams: 132,
        nf_calories: 273.24,
        nf_total_fat: 14.52,
        nf_saturated_fat: 8.96,
        nf_cholesterol: 58.08,
        nf_sodium: 105.6,
        nf_total_carbohydrate: 31.15,
        nf_dietary_fiber: 0.92,
        nf_sugars: 28.01,
        nf_protein: 4.62,
        nf_potassium: 262.68,
        nf_p: 138.6,
        full_nutrients: [
          {
            attr_id: 203,
            value: 4.62,
          },
          {
            attr_id: 204,
            value: 14.52,
          },
          {
            attr_id: 205,
            value: 31.152,
          },
          {
            attr_id: 207,
            value: 1.188,
          },
          {
            attr_id: 208,
            value: 273.24,
          },
          {
            attr_id: 221,
            value: 0,
          },
          {
            attr_id: 255,
            value: 80.52,
          },
          {
            attr_id: 262,
            value: 0,
          },
          {
            attr_id: 263,
            value: 0,
          },
          {
            attr_id: 268,
            value: 1145.76,
          },
          {
            attr_id: 269,
            value: 28.0104,
          },
          {
            attr_id: 291,
            value: 0.924,
          },
          {
            attr_id: 301,
            value: 168.96,
          },
          {
            attr_id: 303,
            value: 0.1188,
          },
          {
            attr_id: 304,
            value: 18.48,
          },
          {
            attr_id: 305,
            value: 138.6,
          },
          {
            attr_id: 306,
            value: 262.68,
          },
          {
            attr_id: 307,
            value: 105.6,
          },
          {
            attr_id: 309,
            value: 0.9108,
          },
          {
            attr_id: 312,
            value: 0.0304,
          },
          {
            attr_id: 313,
            value: 20.328,
          },
          {
            attr_id: 315,
            value: 0.0106,
          },
          {
            attr_id: 317,
            value: 2.376,
          },
          {
            attr_id: 318,
            value: 555.72,
          },
          {
            attr_id: 319,
            value: 153.12,
          },
          {
            attr_id: 320,
            value: 155.76,
          },
          {
            attr_id: 321,
            value: 25.08,
          },
          {
            attr_id: 322,
            value: 0,
          },
          {
            attr_id: 323,
            value: 0.396,
          },
          {
            attr_id: 324,
            value: 10.56,
          },
          {
            attr_id: 326,
            value: 0.264,
          },
          {
            attr_id: 328,
            value: 0.264,
          },
          {
            attr_id: 334,
            value: 0,
          },
          {
            attr_id: 337,
            value: 0,
          },
          {
            attr_id: 338,
            value: 0,
          },
          {
            attr_id: 401,
            value: 0.792,
          },
          {
            attr_id: 404,
            value: 0.0541,
          },
          {
            attr_id: 405,
            value: 0.3168,
          },
          {
            attr_id: 406,
            value: 0.1531,
          },
          {
            attr_id: 410,
            value: 0.7669,
          },
          {
            attr_id: 415,
            value: 0.0634,
          },
          {
            attr_id: 417,
            value: 6.6,
          },
          {
            attr_id: 418,
            value: 0.5148,
          },
          {
            attr_id: 421,
            value: 34.32,
          },
          {
            attr_id: 430,
            value: 0.396,
          },
          {
            attr_id: 431,
            value: 0,
          },
          {
            attr_id: 432,
            value: 6.6,
          },
          {
            attr_id: 435,
            value: 6.6,
          },
          {
            attr_id: 501,
            value: 0.0594,
          },
          {
            attr_id: 502,
            value: 0.1927,
          },
          {
            attr_id: 503,
            value: 0.2574,
          },
          {
            attr_id: 504,
            value: 0.4171,
          },
          {
            attr_id: 505,
            value: 0.3406,
          },
          {
            attr_id: 506,
            value: 0.1069,
          },
          {
            attr_id: 507,
            value: 0.0383,
          },
          {
            attr_id: 508,
            value: 0.2072,
          },
          {
            attr_id: 509,
            value: 0.2046,
          },
          {
            attr_id: 510,
            value: 0.2864,
          },
          {
            attr_id: 511,
            value: 0.165,
          },
          {
            attr_id: 512,
            value: 0.1162,
          },
          {
            attr_id: 513,
            value: 0.1597,
          },
          {
            attr_id: 514,
            value: 0.33,
          },
          {
            attr_id: 515,
            value: 0.8989,
          },
          {
            attr_id: 516,
            value: 0.1228,
          },
          {
            attr_id: 517,
            value: 0.4303,
          },
          {
            attr_id: 518,
            value: 0.2336,
          },
          {
            attr_id: 601,
            value: 58.08,
          },
          {
            attr_id: 606,
            value: 8.9628,
          },
          {
            attr_id: 607,
            value: 0.4752,
          },
          {
            attr_id: 608,
            value: 0.2772,
          },
          {
            attr_id: 609,
            value: 0.1584,
          },
          {
            attr_id: 610,
            value: 0.3696,
          },
          {
            attr_id: 611,
            value: 0.4092,
          },
          {
            attr_id: 612,
            value: 1.4916,
          },
          {
            attr_id: 613,
            value: 4.0392,
          },
          {
            attr_id: 614,
            value: 1.7371,
          },
          {
            attr_id: 615,
            value: 0,
          },
          {
            attr_id: 617,
            value: 3.6472,
          },
          {
            attr_id: 618,
            value: 0.363,
          },
          {
            attr_id: 619,
            value: 0.231,
          },
          {
            attr_id: 620,
            value: 0,
          },
          {
            attr_id: 621,
            value: 0,
          },
          {
            attr_id: 624,
            value: 0,
          },
          {
            attr_id: 625,
            value: 0,
          },
          {
            attr_id: 626,
            value: 0.2719,
          },
          {
            attr_id: 627,
            value: 0,
          },
          {
            attr_id: 628,
            value: 0,
          },
          {
            attr_id: 629,
            value: 0.004,
          },
          {
            attr_id: 630,
            value: 0,
          },
          {
            attr_id: 631,
            value: 0,
          },
          {
            attr_id: 645,
            value: 3.9191,
          },
          {
            attr_id: 646,
            value: 0.5966,
          },
          {
            attr_id: 652,
            value: 0,
          },
          {
            attr_id: 653,
            value: 0,
          },
          {
            attr_id: 654,
            value: 0,
          },
          {
            attr_id: 696,
            value: 0,
          },
        ],
        nix_brand_name: null,
        nix_brand_id: null,
        nix_item_name: null,
        nix_item_id: null,
        upc: null,
        consumed_at: "2021-10-17T12:09:27+00:00",
        metadata: {
          is_raw_food: false,
        },
        source: 1,
        ndb_no: 19095,
        tags: {
          item: "vanilla ice cream",
          measure: null,
          quantity: "1.0",
          food_group: 1,
          tag_id: 862,
        },
        alt_measures: [
          {
            serving_weight: 66,
            measure: "serving 1/2 cup",
            seq: 1,
            qty: 1,
          },
          {
            serving_weight: 132,
            measure: "cup",
            seq: 80,
            qty: 1,
          },
          {
            serving_weight: 100,
            measure: "g",
            seq: null,
            qty: 100,
          },
          {
            serving_weight: 28.3495,
            measure: "wt. oz",
            seq: null,
            qty: 1,
          },
          {
            serving_weight: 2.75,
            measure: "tsp",
            seq: 101,
            qty: 1,
          },
          {
            serving_weight: 8.25,
            measure: "tbsp",
            seq: 102,
            qty: 1,
          },
        ],
        lat: null,
        lng: null,
        meal_type: 1,
        photo: {
          thumb: "https://nix-tag-images.s3.amazonaws.com/862_thumb.jpg",
          highres: "https://nix-tag-images.s3.amazonaws.com/862_highres.jpg",
          is_user_uploaded: false,
        },
        sub_recipe: null,
        class_code: null,
        brick_code: null,
        tag_id: null,
      },
      rating: null,
    },
    {
      id: "20140976",
      name: "Cheese, Swiss Cogruet Shredded",
      company: "KNGS",
      product_description:
        "Rindless, ivory to light yellow interior, bright, firm and supple texture. Delicate sweet taste of hazelnut, reminiscent of Emmental but less pronounced.",
      nutrition: {
        food_name: "cheese swiss",
        brand_name: null,
        serving_qty: 1,
        serving_unit: "cup, shredded",
        serving_weight_grams: 108,
        nf_calories: 424.44,
        nf_total_fat: 33.47,
        nf_saturated_fat: 19.69,
        nf_cholesterol: 100.44,
        nf_sodium: 201.96,
        nf_total_carbohydrate: 1.56,
        nf_dietary_fiber: 0,
        nf_sugars: 0,
        nf_protein: 29.12,
        nf_potassium: 77.76,
        nf_p: 619.92,
        full_nutrients: [
          {
            attr_id: 203,
            value: 29.1168,
          },
          {
            attr_id: 204,
            value: 33.4692,
          },
          {
            attr_id: 205,
            value: 1.5552,
          },
          {
            attr_id: 207,
            value: 3.2076,
          },
          {
            attr_id: 208,
            value: 424.44,
          },
          {
            attr_id: 210,
            value: 0,
          },
          {
            attr_id: 211,
            value: 0,
          },
          {
            attr_id: 212,
            value: 0,
          },
          {
            attr_id: 213,
            value: 0,
          },
          {
            attr_id: 214,
            value: 0,
          },
          {
            attr_id: 221,
            value: 0,
          },
          {
            attr_id: 255,
            value: 40.6404,
          },
          {
            attr_id: 262,
            value: 0,
          },
          {
            attr_id: 263,
            value: 0,
          },
          {
            attr_id: 268,
            value: 1776.6,
          },
          {
            attr_id: 269,
            value: 0,
          },
          {
            attr_id: 287,
            value: 0,
          },
          {
            attr_id: 291,
            value: 0,
          },
          {
            attr_id: 301,
            value: 961.2,
          },
          {
            attr_id: 303,
            value: 0.1404,
          },
          {
            attr_id: 304,
            value: 35.64,
          },
          {
            attr_id: 305,
            value: 619.92,
          },
          {
            attr_id: 306,
            value: 77.76,
          },
          {
            attr_id: 307,
            value: 201.96,
          },
          {
            attr_id: 309,
            value: 4.7196,
          },
          {
            attr_id: 312,
            value: 0.0508,
          },
          {
            attr_id: 315,
            value: 0.0281,
          },
          {
            attr_id: 317,
            value: 32.4,
          },
          {
            attr_id: 318,
            value: 1130.76,
          },
          {
            attr_id: 319,
            value: 305.64,
          },
          {
            attr_id: 320,
            value: 311.04,
          },
          {
            attr_id: 321,
            value: 65.88,
          },
          {
            attr_id: 322,
            value: 1.08,
          },
          {
            attr_id: 323,
            value: 0.648,
          },
          {
            attr_id: 324,
            value: 0,
          },
          {
            attr_id: 325,
            value: 0,
          },
          {
            attr_id: 326,
            value: 0,
          },
          {
            attr_id: 328,
            value: 0,
          },
          {
            attr_id: 334,
            value: 2.16,
          },
          {
            attr_id: 337,
            value: 1.08,
          },
          {
            attr_id: 338,
            value: 8.64,
          },
          {
            attr_id: 341,
            value: 0.0216,
          },
          {
            attr_id: 342,
            value: 0.0756,
          },
          {
            attr_id: 343,
            value: 0,
          },
          {
            attr_id: 344,
            value: 0.1404,
          },
          {
            attr_id: 345,
            value: 0,
          },
          {
            attr_id: 346,
            value: 0,
          },
          {
            attr_id: 347,
            value: 0,
          },
          {
            attr_id: 401,
            value: 0,
          },
          {
            attr_id: 404,
            value: 0.0119,
          },
          {
            attr_id: 405,
            value: 0.3262,
          },
          {
            attr_id: 406,
            value: 0.0691,
          },
          {
            attr_id: 410,
            value: 0.3812,
          },
          {
            attr_id: 415,
            value: 0.0767,
          },
          {
            attr_id: 417,
            value: 10.8,
          },
          {
            attr_id: 418,
            value: 3.3048,
          },
          {
            attr_id: 421,
            value: 16.74,
          },
          {
            attr_id: 428,
            value: 6.804,
          },
          {
            attr_id: 429,
            value: 0,
          },
          {
            attr_id: 430,
            value: 1.512,
          },
          {
            attr_id: 431,
            value: 0,
          },
          {
            attr_id: 432,
            value: 10.8,
          },
          {
            attr_id: 435,
            value: 10.8,
          },
          {
            attr_id: 454,
            value: 0.648,
          },
          {
            attr_id: 501,
            value: 0.4331,
          },
          {
            attr_id: 502,
            value: 1.121,
          },
          {
            attr_id: 503,
            value: 1.66,
          },
          {
            attr_id: 504,
            value: 3.1957,
          },
          {
            attr_id: 505,
            value: 2.7918,
          },
          {
            attr_id: 506,
            value: 0.8467,
          },
          {
            attr_id: 507,
            value: 0.3132,
          },
          {
            attr_id: 508,
            value: 1.795,
          },
          {
            attr_id: 509,
            value: 1.8284,
          },
          {
            attr_id: 510,
            value: 2.3101,
          },
          {
            attr_id: 511,
            value: 1.0012,
          },
          {
            attr_id: 512,
            value: 1.1502,
          },
          {
            attr_id: 513,
            value: 0.9871,
          },
          {
            attr_id: 514,
            value: 1.6945,
          },
          {
            attr_id: 515,
            value: 6.1603,
          },
          {
            attr_id: 516,
            value: 0.5486,
          },
          {
            attr_id: 517,
            value: 3.9852,
          },
          {
            attr_id: 518,
            value: 1.7712,
          },
          {
            attr_id: 601,
            value: 100.44,
          },
          {
            attr_id: 605,
            value: 1.066,
          },
          {
            attr_id: 606,
            value: 19.6852,
          },
          {
            attr_id: 607,
            value: 0.7355,
          },
          {
            attr_id: 608,
            value: 0.5854,
          },
          {
            attr_id: 609,
            value: 0.3532,
          },
          {
            attr_id: 610,
            value: 0.8294,
          },
          {
            attr_id: 611,
            value: 0.945,
          },
          {
            attr_id: 612,
            value: 3.1525,
          },
          {
            attr_id: 613,
            value: 9.0266,
          },
          {
            attr_id: 614,
            value: 3.4517,
          },
          {
            attr_id: 615,
            value: 0.0475,
          },
          {
            attr_id: 617,
            value: 7.6248,
          },
          {
            attr_id: 618,
            value: 1.1729,
          },
          {
            attr_id: 619,
            value: 0.1393,
          },
          {
            attr_id: 620,
            value: 0.0497,
          },
          {
            attr_id: 621,
            value: 0,
          },
          {
            attr_id: 624,
            value: 0.0151,
          },
          {
            attr_id: 625,
            value: 0.3208,
          },
          {
            attr_id: 626,
            value: 0.6102,
          },
          {
            attr_id: 627,
            value: 0.0011,
          },
          {
            attr_id: 628,
            value: 0.0648,
          },
          {
            attr_id: 629,
            value: 0,
          },
          {
            attr_id: 630,
            value: 0.0022,
          },
          {
            attr_id: 631,
            value: 0.0194,
          },
          {
            attr_id: 645,
            value: 8.6897,
          },
          {
            attr_id: 646,
            value: 1.4483,
          },
          {
            attr_id: 652,
            value: 0.3294,
          },
          {
            attr_id: 653,
            value: 0.2041,
          },
          {
            attr_id: 654,
            value: 0.0097,
          },
          {
            attr_id: 662,
            value: 0.1102,
          },
          {
            attr_id: 663,
            value: 0.7474,
          },
          {
            attr_id: 664,
            value: 0,
          },
          {
            attr_id: 670,
            value: 0.1739,
          },
          {
            attr_id: 671,
            value: 0,
          },
          {
            attr_id: 672,
            value: 0.0076,
          },
          {
            attr_id: 673,
            value: 0.5,
          },
          {
            attr_id: 674,
            value: 6.8785,
          },
          {
            attr_id: 675,
            value: 0.7927,
          },
          {
            attr_id: 676,
            value: 0.0022,
          },
          {
            attr_id: 685,
            value: 0.0022,
          },
          {
            attr_id: 687,
            value: 0.067,
          },
          {
            attr_id: 689,
            value: 0.0378,
          },
          {
            attr_id: 693,
            value: 0.8564,
          },
          {
            attr_id: 695,
            value: 0.2095,
          },
          {
            attr_id: 697,
            value: 0,
          },
          {
            attr_id: 851,
            value: 0.135,
          },
          {
            attr_id: 852,
            value: 0.0032,
          },
          {
            attr_id: 853,
            value: 0.0346,
          },
          {
            attr_id: 858,
            value: 0.0076,
          },
        ],
        nix_brand_name: null,
        nix_brand_id: null,
        nix_item_name: null,
        nix_item_id: null,
        upc: null,
        consumed_at: "2021-10-17T01:19:58+00:00",
        metadata: {
          is_raw_food: false,
        },
        source: 1,
        ndb_no: 1040,
        tags: {
          item: "swiss",
          measure: null,
          quantity: "1.0",
          food_group: 1,
          tag_id: 837,
        },
        alt_measures: [
          {
            serving_weight: 28.35,
            measure: "oz",
            seq: 4,
            qty: 1,
          },
          {
            serving_weight: 28,
            measure: "slice (1 oz)",
            seq: 6,
            qty: 1,
          },
          {
            serving_weight: 15,
            measure: "cubic inch",
            seq: 5,
            qty: 1,
          },
          {
            serving_weight: 108,
            measure: "cup, shredded",
            seq: 3,
            qty: 1,
          },
          {
            serving_weight: 244,
            measure: "cup, melted",
            seq: 2,
            qty: 1,
          },
          {
            serving_weight: 132,
            measure: "cup, diced",
            seq: 1,
            qty: 1,
          },
          {
            serving_weight: 100,
            measure: "g",
            seq: null,
            qty: 100,
          },
        ],
        lat: null,
        lng: null,
        meal_type: 5,
        photo: {
          thumb: "https://nix-tag-images.s3.amazonaws.com/837_thumb.jpg",
          highres: "https://nix-tag-images.s3.amazonaws.com/837_highres.jpg",
          is_user_uploaded: false,
        },
        sub_recipe: null,
        class_code: null,
        brick_code: null,
        tag_id: null,
      },
      rating: null,
    },
  ];
  if (fontsLoaded) {
    return (
      <View style={styles.back}>
        <Navbar />
        <Text style={styles.heading}>Recommendations:</Text>
        <ScrollView
          contentContainerStyle={styles.product_row}
          scrollEnabled={true}
          horizontal={true}
        >
          {data2.map((cartEntry, i) => {
            return (
              <ProductCard
                name={cartEntry.name}
                imgUrl={cartEntry["nutrition"]["photo"]["highres"]}
                price={parseFloat((Math.random() * 5).toPrecision(3))}
                weightLb={parseFloat((Math.random() * 2).toPrecision(2))}
                key={i}
              />
            );
          })}
        </ScrollView>
        <Text style={styles.heading}>Buying History:</Text>
        <ScrollView
          contentContainerStyle={styles.product_row}
          scrollEnabled={true}
          horizontal={true}
        >
          {data2.reverse().map((cartEntry, i) => {
            return (
              <ProductCard
                name={cartEntry.name}
                imgUrl={cartEntry["nutrition"]["photo"]["highres"]}
                price={parseFloat((Math.random() * 5).toPrecision(3))}
                weightLb={parseFloat((Math.random() * 2).toPrecision(2))}
                key={i}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  } else {
    return <Text>Loading</Text>;
  }
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#fafafa",
    height: "100%",
  },
  heading: {
    paddingStart: 30,
    paddingTop: 10,
    color: "#2F2E41",
    fontFamily: "Nunito_600SemiBold",
    fontSize: 22,
  },
  product_row: {
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
  },
});

export default HomeScreen2;
