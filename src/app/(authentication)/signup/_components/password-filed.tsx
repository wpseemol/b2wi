import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { registerForm } from '@/lib/schema/zod/register-form';
import { useEffect, useMemo, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { PiEyeClosedDuotone, PiEyeDuotone } from 'react-icons/pi';
import { z } from 'zod';

// password label check there.
export function PasswordFiled({
    form,
}: {
    form: UseFormReturn<z.infer<typeof registerForm>>;
}) {
    const [isHidden, setIsHidden] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');

    const [strengthLevel, setStrengthLevel] = useState<string | null>(null);

    // Memoize the password strength calculation
    const strengthScore = useMemo(() => {
        const containsUpperCase = /[A-Z]/.test(passwordValue);
        const containsLowerCase = /[a-z]/.test(passwordValue);
        const containsNumber = /[0-9]/.test(passwordValue);
        const containsSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
            passwordValue
        );
        return (
            (containsSpecial ? 1 : 0) +
            (containsUpperCase ? 1 : 0) +
            (containsLowerCase ? 1 : 0) +
            (containsNumber ? 1 : 0)
        );
    }, [passwordValue]);

    // Set password strength level based on the score
    useEffect(() => {
        if (passwordValue.length > 5) {
            switch (strengthScore) {
                case 1:
                case 2:
                    setStrengthLevel('Weak');
                    style = 'text-[#ff2323]';
                    break;
                case 3:
                    setStrengthLevel('Medium');
                    style = 'text-[#fecf02]';
                    break;
                case 4:
                    setStrengthLevel('Strong');
                    style = 'text-[#0dc547]';
                    break;
                default:
                    setStrengthLevel(null);
            }
        } else {
            setStrengthLevel(null);
            style = '';
        }
    }, [strengthScore, passwordValue]);

    // Clear the strength level after 5 seconds
    useEffect(() => {
        if (strengthLevel) {
            const timer = setTimeout(() => {
                setStrengthLevel(null);
                style = '';
            }, 5000);

            return () => clearTimeout(timer); // Cleanup on unmount or on strengthLevel change
        }
    }, [strengthLevel]);

    const password = form.watch('password');

    useEffect(() => {
        setPasswordValue(password);
    }, [password]);

    return (
        <>
            <div className="grid gap-2">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <FormItem className="relative">
                            <FormControl className="w-full">
                                <input
                                    type={isHidden ? 'text' : 'password'}
                                    {...field}
                                    className="!bg-transparent !ring-0 !shadow-none border-0 outline-0 border-b border-blue-950 border-black-normal py-3 pl-3 focus:border-primary transition-all"
                                    placeholder="Password"
                                />
                            </FormControl>

                            <span
                                onClick={() => setIsHidden((prev) => !prev)}
                                className={`absolute right-4 top-[.7rem]`}
                            >
                                {isHidden ? (
                                    <PiEyeDuotone />
                                ) : (
                                    <PiEyeClosedDuotone />
                                )}
                            </span>

                            <FormMessage>
                                {fieldState.error?.message}
                            </FormMessage>
                            {strengthLevel && (
                                <p className={`${style}`}>
                                    {strengthLevel} password!
                                </p>
                            )}
                        </FormItem>
                    )}
                />
            </div>
            {/* <div className="grid gap-2 relative">
                <span
                    onClick={() => setIsHidden((prev) => !prev)}
                    className="absolute right-4 top-11"
                >
                    {isHidden ? <PiEyeDuotone /> : <PiEyeClosedDuotone />}
                </span>
                <InputField
                    form={form}
                    name="conformPass"
                    type={isHidden ? 'text' : 'password'}
                    label="Conform password*"
                    placeholder={isHidden ? 'Password' : '********'}
                />
            </div> */}
        </>
    );
}

let style = '';
