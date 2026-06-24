function Find-JavaHome {
    $candidates = @(
        "C:\Java\jdk-25",
        $env:JAVA_HOME,
        "C:\Users\RAPHA GADGETS\Downloads\oracleJdk-25"
    ) | Where-Object { $_ }

    foreach ($candidate in $candidates) {
        $javaPath = Join-Path $candidate "bin\java.exe"
        if (Test-Path $javaPath) {
            return $candidate
        }
    }

    throw "Could not find java.exe. Set JAVA_HOME to your JDK folder and try again."
}

$javaHome = Find-JavaHome
$java = Join-Path $javaHome "bin\java.exe"

if (-not (Test-Path "out\com\sunshine\portfolio\PortfolioServer.class")) {
    .\build.ps1
}

& $java -cp out com.sunshine.portfolio.PortfolioServer
