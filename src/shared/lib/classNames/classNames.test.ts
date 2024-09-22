import {cn} from '@/shared/lib';


describe("cn utility function", () => {
  it("should merge classes correctly", () => {
    const result = cn("bg-red-500", "text-white");
    expect(result).toBe("bg-red-500 text-white");
  });
  
  it("should handle undefined, null, and false values", () => {
    const result = cn("bg-red-500", undefined, null, false, "text-white");
    expect(result).toBe("bg-red-500 text-white");
  });
  
  it("should merge Tailwind classes and eliminate conflicts", () => {
    const result = cn("bg-red-500", "bg-blue-500", "text-white");
    expect(result).toBe("bg-blue-500 text-white"); // twMerge должен убрать bg-red-500
  });
  
  it("should return an empty string if no valid classes are provided", () => {
    const result = cn(undefined, null, false, "");
    expect(result).toBe("");
  });
  
  it("should handle array input correctly", () => {
    const result = cn(["bg-red-500", "text-white"]);
    expect(result).toBe("bg-red-500 text-white");
  });
  
  it("should merge multiple classes and remove duplicates", () => {
    const result = cn("bg-red-500", "text-white", "text-white", "font-bold");
    expect(result).toBe("bg-red-500 text-white font-bold");
  });
});