export type ListSectionData = {
    cim: string
    tartalom: string[]
    rendelt: boolean;
}

export type ListSectionProps = ListSectionData

export type FruitTableRow = string[]

export type FruitTableProps = {
    rows: FruitTableRow
}

export type FruitCardData = {
    id: string
    name: string
    image: string
    alt: string
    leiras: string
}

export type FruitCardProps = Omit<FruitCardData, "id">;

export type IntroCardProps ={
    paragrafusok: string[]
}

export type ImportantFactsProps = {
    facts: string[];
}

