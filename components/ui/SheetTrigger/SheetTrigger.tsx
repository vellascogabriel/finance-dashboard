import { forwardRef } from 'react';
import { DialogTrigger } from '@radix-ui/react-dialog';

type Props = {
    children: React.ReactNode;
    className?: string;
}

const SheetTrigger = forwardRef(({ children, className }: Props) => {
    return (
        <DialogTrigger className={`cursor-pointer ${className}`}>
            {children}
        </DialogTrigger>
    );
});

SheetTrigger.displayName = 'SheetTrigger';

export default SheetTrigger;
