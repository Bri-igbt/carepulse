"use client";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  file: File[] | undefined;
  onChange: (file: File[]) => void;
};

const FileUploader = ({ file, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  // useDropzone hook provides us with all the necessary props and methods
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {file && file.length > 0 ? (
        <Image
          src={convertFileToUrl(file[0])}
          height={1000}
          width={1000}
          alt="Uploaded file"
          className="m-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="upload"
          />

          <div className="file-upload_label">
            <p className="text-14-regular">
              <span className="text-green-500">click to upload</span> or drag
              and drop
            </p>

            <p> SVG, PNG, JPG or Gif (max 800x400)</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
