
export type BindInfo = {
    WidgetName: string;
    ExtensionName: string;
    PropertyKey: string | symbol;
};

export class TS_UserWidgetExtension
{
    public BindList: Array<BindInfo> = new Array<BindInfo>();

    public ToString(): void
    {
        console.log(`${(this as any).constructor.name} bind num: ${this.BindList.length}`);
    }
}


export function BindWidget(WidgetName: string, ExtensionName: string = ""): PropertyDecorator {
    return (target, propKey) => {
        if (target instanceof TS_UserWidgetExtension) {
            var bindInfo = { WidgetName: WidgetName, ExtensionName: ExtensionName, PropertyKey: propKey};
            if (target.BindList == null) {
                target.BindList = new Array<BindInfo>();
            }
            target.BindList.push(bindInfo);

            //target.AddBind(bindInfo);
        }
    };
}

export class TS_BaseExtension extends TS_UserWidgetExtension
{
    @BindWidget("Base1")
    Base1: string | undefined;
}

export class TS_SubExtension extends TS_BaseExtension
{
    @BindWidget("Sub1")
    Sub1: string | undefined;

    @BindWidget("Sub2")
    Sub2: string | undefined;
}

let Base = new TS_BaseExtension();
let Sub = new TS_SubExtension();

Base.ToString();
Sub.ToString();
