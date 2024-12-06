import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class SetOperations {
    private static ArrayList<Object> setA = new ArrayList<>();
    private static ArrayList<Object> setB = new ArrayList<>();

    public static void main(String[] args) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        boolean exit = false;

        while (!exit) {
            System.out.println("\nChoose an operation:");
            System.out.println("1. Insert to Set A");
            System.out.println("2. Insert to Set B");
            System.out.println("3. Union");
            System.out.println("4. Intersection");
            System.out.println("5. Difference (Set B - Set A)");
            System.out.println("6. Subset Check (Is Set B a subset of Set A?)");
            System.out.println("7. Display Sets");
            System.out.println("8. Exit");
            System.out.print("Enter your choice: ");

            String choice = reader.readLine();

            switch (choice) {
                case "1":
                    System.out.print("Enter element to insert into Set A: ");
                    Object elementA = parseElement(reader.readLine());
                    insert(setA, elementA);
                    break;
                case "2":
                    System.out.print("Enter element to insert into Set B: ");
                    Object elementB = parseElement(reader.readLine());
                    insert(setB, elementB);
                    break;
                case "3":
                    ArrayList<Object> unionSet = union(setA, setB);
                    System.out.println("Union: " + unionSet);
                    break;
                case "4":
                    ArrayList<Object> intersectionSet = intersection(setA, setB);
                    System.out.println("Intersection: " + intersectionSet);
                    break;
                case "5":
                    ArrayList<Object> differenceSet = difference(setA, setB);
                    System.out.println("Difference (Set B - Set A): " + differenceSet);
                    break;
                case "6":
                    boolean isSubset = subset(setA, setB);
                    System.out.println("Is Set B a subset of Set A? " + isSubset);
                    break;
                case "7":
                    System.out.println("Set A: " + setA);
                    System.out.println("Set B: " + setB);
                    break;
                case "8":
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static Object parseElement(String input) {
        try {
            if (input.matches("[-+]?\\d+")) {
                return Integer.parseInt(input);
            } else if (input.matches("[-+]?\\d*\\.\\d+")) {
                return Double.parseDouble(input);
            } else {
                return input;
            }
        } catch (Exception e) {
            return input;
        }
    }

    private static void insert(ArrayList<Object> set, Object element) {
        if (!set.contains(element)) {
            set.add(element);
            System.out.println("Element added.");
        } else {
            System.out.println("Element already exists in the set.");
        }
    }

    private static ArrayList<Object> union(ArrayList<Object> setA, ArrayList<Object> setB) {
        ArrayList<Object> result = new ArrayList<>(setA);
        for (Object element : setB) {
            if (!result.contains(element)) {
                result.add(element);
            }
        }
        return result;
    }

    private static ArrayList<Object> intersection(ArrayList<Object> setA, ArrayList<Object> setB) {
        ArrayList<Object> result = new ArrayList<>();
        for (Object element : setA) {
            if (setB.contains(element)) {
                result.add(element);
            }
        }
        return result;
    }

    private static ArrayList<Object> difference(ArrayList<Object> setA, ArrayList<Object> setB) {
        ArrayList<Object> result = new ArrayList<>();
        for (Object element : setB) {
            if (!setA.contains(element)) {
                result.add(element);
            }
        }
        return result;
    }

    private static boolean subset(ArrayList<Object> setA, ArrayList<Object> setB) {
        return setA.containsAll(setB);
    }
}
