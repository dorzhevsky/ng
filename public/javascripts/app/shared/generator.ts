export class Generator
{
    private static next: number = 1;
    public static Next(): number{
        return Generator.next++;
    }
}