import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CircuitSimulator {
    
    // Map to hold the inputs
    private static Map<Character, int[]> inputs = new HashMap<>();
    // Map to hold the gate definitions
    private static Map<Character, String> gates = new HashMap<>();
    // Map to hold the outputs of the gates
    private static Map<Character, int[]> outputs = new HashMap<>();
    
    // Method to evaluate the gate operation
    private static int evaluateGate(String operation, int input1, int input2) {
        switch (operation) {
            case "AND":
                return input1 & input2;
            case "OR":
                return input1 | input2;
            case "NAND":
                return ~(input1 & input2) & 1; // NAND
            case "NOR":
                return ~(input1 | input2) & 1; // NOR
            case "XOR":
                return input1 ^ input2;
            default:
                return 0;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // Read number of gates
        int n = Integer.parseInt(sc.nextLine().trim());
        
        // Read gates
        for (int i = 0; i < n; i++) {
            String gateDefinition = sc.nextLine().trim();
            String[] parts = gateDefinition.split("=");
            char gateName = parts[0].charAt(0);
            gates.put(gateName, parts[1]);
            outputs.put(gateName, new int[20]); // Initialize output array for each gate with max size
        }

        // Read number of cycles
        int t = Integer.parseInt(sc.nextLine().trim());

        // Read inputs
        for (int i = 0; i < t; i++) {
            String inputLine = sc.nextLine().trim();
            String[] inputParts = inputLine.split(" ");
            char inputName = inputParts[0].charAt(0);
            int[] inputValues = new int[t];
            for (int j = 0; j < t; j++) {
                inputValues[j] = Integer.parseInt(inputParts[j + 1]);
            }
            inputs.put(inputName, inputValues);
        }

        // Read the gate whose output is required
        char requiredGate = sc.nextLine().trim().charAt(0);

        // Calculate outputs for each gate
        for (int cycle = 0; cycle < t; cycle++) {
            for (char gate : gates.keySet()) {
                String gateDef = gates.get(gate);
                String[] gateParts = gateDef.split("\\(");
                String gateType = gateParts[0];
                String[] inputsNames = gateParts[1].replace(")", "").split(",");

                // Get the actual input values for the gate
                int input1 = 0; // Default to 0 for first cycle
                int input2 = 0; // Default to 0 for first cycle

                // If there are input names, fetch their current cycle values
                if (inputsNames.length >= 1) {
                    char firstInputName = inputsNames[0].trim().charAt(0);
                    input1 = inputs.get(firstInputName)[cycle];
                }
                if (inputsNames.length >= 2) {
                    char secondInputName = inputsNames[1].trim().charAt(0);
                    input2 = inputs.get(secondInputName)[cycle];
                }

                // Compute the output for the gate
                if (cycle == 0) {
                    outputs.get(gate)[cycle] = 0; // Initial output is 0
                } else {
                    // Calculate the output based on the inputs
                    outputs.get(gate)[cycle] = evaluateGate(gateType, input1, input2);
                }
            }
        }

        // Output the result for the required gate
        int[] result = outputs.get(requiredGate);
        for (int value : result) {
            System.out.print(value + " ");
        }
        sc.close();
    }
}