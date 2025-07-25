import type LegendPage from "@/app/legend/[id]/page";

type PageProps = { params: { id: string } };
type FirstArg<T> = T extends (arg: infer A) => any ? A : never;

function checkFields<T extends never>() {}

type ActualProps = FirstArg<typeof LegendPage>;

checkFields<Exclude<keyof PageProps, keyof ActualProps>>();
