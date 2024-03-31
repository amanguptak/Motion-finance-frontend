"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import girlImg from "@/public//images/upload.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { uploadSchema, uploadSchemaType } from "@/schema/validation";

function getImageData(event: React.ChangeEvent<HTMLInputElement>) {
  // FileList is immutable, so we need to create a new one
  const dataTransfer = new DataTransfer();

  // Add newly uploaded images
  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image)
  );

  const files = dataTransfer.files;
  const displayUrl = URL.createObjectURL(event.target.files![0]);

  return { files, displayUrl };
}

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const form = useForm<uploadSchemaType>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      profile: "",
    },
  });
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     setSelectedImage(URL.createObjectURL(file));
  //   }
  // };
  const imgSubmit = (values: uploadSchemaType) => {
    // const formValue = new FormData()
    // formValue.append("userImg",values?.profile);
    console.log("[image path]", values?.profile);
    toast.success("Image Uploaded  Successfully")
    form.reset();
    setSelectedImage(null)
  };
  return (
    <div>
      <Dialog>
        <>
          <DialogTrigger className="text-center w-screen h-screen text-rose-500">
            Profile pic
          </DialogTrigger>
          <DialogContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(imgSubmit)}>
                <FormField
                  control={form.control}
                  name="profile"
                  render={({ field: { onChange, value, ...rest } }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="img-upload"
                        className="cursor-pointer"
                      >
                        <p className=" text-center m-2 text-rose-500">
                          Upload an image
                        </p>
                        {selectedImage ? (
                          <Image
                            src={selectedImage}
                            alt="selectedImg"
                            width={500}
                            height={500}
                          />
                        ) : (
                          <Image src={girlImg} alt="upload" />
                        )}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          id="img-upload"
                          className="hidden"
                          {...rest}
                          onChange={(event) => {
                            const file = event.target.files![0];
                            if (file) {
                              const displayUrl = URL.createObjectURL(file);
                              setSelectedImage(displayUrl);
                              onChange(file); // Pass the File object instead of FileList
                            }
                          }}
                          // {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="mt-2" type="submit">
                  Upload
                </Button>
              </form>
            </Form>
          </DialogContent>
        </>
      </Dialog>
    </div>
  );
};

export default ImageUpload;