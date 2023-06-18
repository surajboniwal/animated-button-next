import { style } from "@vanilla-extract/css"
import {recipe} from "@vanilla-extract/recipes"

export const main = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
})

export const button = recipe({
    base: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 16px",
        cursor: "pointer",
        transition: "all 150ms",
        fontWeight: "bolder",
        userSelect: "none",
        ":hover": {
            transform: "translate(-2px, -2px)"
        },
    },
    variants:{
        state: {
            clicked: {
                transform: "translate(2px, 2px) !important",
                boxShadow: "0px 0px 0px 0px transparent !important",
            },
            default: {
                transform: "translate(0px, 0px);",
            },
        },
        variant: {
            primary: {
                backgroundColor: "thistle",
                color: "rebeccapurple",
                ":hover":{
                    boxShadow: "4px 4px 0px 0px rebeccapurple",
                }
            },
            secondary: {
                backgroundColor:"rebeccapurple",
                color: "turquoise",
                ":hover": {
                    boxShadow: "4px 4px 0px 0px turquoise",
                },
            },
        },
        type: {
            rounded: {
                borderRadius: "6px",
            },
            square: {
                borderRadius: "0px",
            }
        },
    },
    defaultVariants: {
        variant: "primary",
        type: "rounded",
        state: "clicked",
    }
})