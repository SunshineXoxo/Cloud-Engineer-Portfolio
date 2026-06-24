function Find-JavaHome {
    $candidates = @(
        "C:\Java\jdk-25",
        $env:JAVA_HOME,
        "C:\Users\RAPHA GADGETS\Downloads\oracleJdk-25"
    ) | Where-Object { $_ }

    foreach ($candidate in $candidates) {
        $javacPath = Join-Path $candidate "bin\javac.exe"
        if (Test-Path $javacPath) {
            return $candidate
        }
    }

    throw "Could not find javac.exe. Set JAVA_HOME to your JDK folder and try again."
}

$javaHome = Find-JavaHome
$javac = Join-Path $javaHome "bin\javac.exe"

New-Item -ItemType Directory -Force -Path "out" | Out-Null
& $javac -d out src\com\sunshine\portfolio\PortfolioServer.java
