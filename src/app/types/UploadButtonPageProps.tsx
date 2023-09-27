import Image from "./Image";
export default interface UploadButtonPageProps {
 images: Image[];
 setImages: React.Dispatch<React.SetStateAction<Image[]>>;
}
