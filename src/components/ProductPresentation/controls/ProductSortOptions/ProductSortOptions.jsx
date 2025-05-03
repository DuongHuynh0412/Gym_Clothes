import * as React from "react";
import { RadioGroup } from "radix-ui";
import { Text } from "@radix-ui/themes";
import "./ProductSortOptions.css";

const ProductSortOptions = () => (
    <form>
        <RadioGroup.Root
            className="RadioGroupRoot"
            defaultValue="default"
            aria-label="View density"
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r1">
                    <Text size={"1"}>Price: Low to high</Text>
                </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r2">
                    <Text size={"1"}>Price: High to low</Text>
                </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r3">
                    <Text size={"1"}>Relevancy</Text>
                </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <RadioGroup.Item className="RadioGroupItem" value="compact" id="r4">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="Label" htmlFor="r4">
                    <Text size={"1"}>Newest</Text>
                </label>
            </div>
        </RadioGroup.Root>
    </form>
);

export default ProductSortOptions;
