'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { loginFormSchema } from '../lib/loginFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
  Input,
  FormMessage,
  Button,
} from '@/shared/ui';

export default function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      {/* Стелизация каких-либо частей формы вся внутри form */}
      <form
        className={`flex flex-col gap-5 text-black max-w-[400px] w-full mx-auto bg-[#F6F0F0] px-7 py-10 rounded-lg`}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Email form field */}
        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`text-black`}>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder='email@gmail.com'
                  {...field}
                />
              </FormControl>
              {/* В данный момент не имеет предназначения
              <FormDescription>This is your public display name.</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        {/* Password form field */}
        <FormField
          control={form.control}
          name={'password'}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`text-black`}>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder='password'
                  {...field}
                />
              </FormControl>
              {/* В данный момент не имеет предназначения
              <FormDescription>This is your public display name.</FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        {/* Send data button */}
        <Button
          className={`mt-10`}
          type='submit'
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
}
