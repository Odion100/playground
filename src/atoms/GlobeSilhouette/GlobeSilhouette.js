import React from "react";
import "./styles.scss";
const GlobeSilhouete = props => {
  return (
    <svg
      className="globe-silhouette"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960.000000 980.000000"
      width={40}
      height={40}
    >
      <g
        transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
        fill="white"
        stroke="grey"
        strokeWidth={10}
      >
        <path
          d="M4640 9794 c-25 -2 -103 -9 -175 -14 -684 -56 -1385 -278 -2005 -632
-118 -68 -415 -262 -425 -278 -4 -7 35 -10 117 -10 117 0 126 -2 176 -30 29
-16 90 -36 135 -46 116 -23 123 -27 131 -68 6 -30 11 -36 39 -40 64 -11 297
-11 293 -1 -2 6 -12 29 -21 53 l-17 42 -68 0 c-37 0 -102 3 -144 7 l-77 6 32
33 c29 30 30 34 19 68 l-11 35 -130 3 -130 3 144 108 144 107 136 0 136 0 63
-89 c71 -100 74 -101 222 -101 l70 0 62 61 61 60 47 -22 c25 -13 45 -26 44
-30 -2 -3 -42 -43 -89 -88 l-87 -81 -78 0 c-44 0 -95 -3 -114 -6 l-36 -6 9
-81 c4 -45 9 -82 10 -83 1 -1 69 1 150 4 l148 5 15 37 c14 34 20 38 61 44 25
3 72 6 103 6 65 0 65 1 76 79 l6 49 -52 7 c-28 4 -54 13 -56 19 -3 7 4 33 15
59 17 38 26 47 58 56 43 12 148 14 282 4 l93 -6 -88 -82 -88 -81 13 -61 13
-62 72 -11 c39 -6 82 -13 95 -16 l23 -5 -7 114 -7 114 88 48 c86 47 90 48 248
67 l161 19 233 -102 232 -103 0 -87 0 -88 38 -10 c21 -6 52 -14 70 -17 18 -4
32 -9 32 -12 0 -3 -16 -34 -35 -69 l-36 -63 -104 0 -103 0 -27 -72 c-15 -40
-31 -77 -35 -81 -5 -6 -363 72 -454 99 -13 4 35 34 160 101 99 52 181 97 184
100 5 5 -40 47 -106 98 l-31 25 -159 -21 -159 -20 -67 -66 -66 -66 -71 -5 -71
-5 0 -34 c0 -27 6 -37 30 -51 46 -26 37 -39 -31 -47 -33 -4 -62 -12 -64 -19
-2 -6 -6 -23 -9 -38 -6 -27 -9 -28 -65 -28 l-59 0 -7 58 c-3 32 -10 64 -14 70
-13 21 -206 -48 -317 -113 -54 -32 -152 -89 -216 -126 l-117 -69 20 -73 c11
-39 22 -80 25 -90 3 -9 31 -35 63 -56 52 -36 68 -41 182 -58 l124 -18 3 -138
3 -138 47 7 c26 3 51 9 55 11 5 3 32 53 60 111 l52 106 128 40 127 39 0 166 0
166 74 56 74 56 172 -40 172 -41 -7 -86 c-12 -148 -15 -135 30 -138 33 -2 65
9 171 62 l131 64 7 -51 c3 -29 6 -93 6 -142 l0 -91 95 -58 95 -58 0 -51 c0
-29 -3 -68 -6 -88 -6 -35 -8 -36 -91 -63 -82 -27 -84 -28 -81 -57 3 -27 12
-34 108 -77 l105 -48 3 -62 3 -62 -33 0 c-32 0 -287 75 -299 88 -4 4 -10 24
-13 44 -6 35 -5 39 33 65 36 25 40 33 41 69 0 41 -1 42 -42 52 -23 6 -43 10
-43 9 -1 -1 -6 -18 -11 -37 -10 -35 -10 -35 -89 -47 -44 -7 -92 -14 -108 -17
-25 -5 -30 -1 -49 39 -25 51 -53 65 -133 65 -66 0 -95 -26 -95 -88 0 -41 0
-41 53 -57 28 -8 66 -18 84 -23 l31 -7 -45 -49 -44 -50 -22 27 c-15 18 -35 28
-62 32 -39 5 -42 3 -144 -95 -82 -78 -102 -102 -93 -113 9 -10 -21 -31 -148
-101 l-159 -87 -149 -157 c-142 -149 -149 -159 -156 -207 -4 -27 -10 -60 -13
-72 -3 -14 -56 -56 -156 -122 -97 -64 -179 -128 -225 -174 l-73 -74 9 -144 c5
-79 8 -146 6 -148 -2 -2 -48 16 -102 40 l-97 45 -3 87 -3 87 -295 0 -294 0
-128 -64 c-70 -35 -137 -72 -149 -82 -38 -34 -134 -224 -164 -328 l-29 -99 41
-91 c23 -50 42 -92 43 -93 1 -1 54 -9 119 -17 l118 -16 177 118 c97 65 182
121 188 125 8 4 17 -15 27 -56 l16 -62 -55 -103 c-31 -57 -54 -105 -51 -108 2
-2 63 -15 135 -27 72 -13 134 -25 137 -28 3 -3 12 -101 20 -219 7 -117 16
-214 18 -216 5 -5 347 -64 372 -64 17 0 126 116 240 257 l21 25 134 -27 c74
-14 142 -28 152 -31 9 -3 41 -37 71 -77 l54 -72 134 7 c74 4 140 10 147 13 6
2 12 21 12 40 0 33 2 36 23 30 12 -4 49 -21 81 -39 57 -29 65 -39 146 -166
l86 -135 151 -7 c84 -3 156 -9 161 -12 5 -3 33 -47 62 -98 53 -92 53 -92 61
-212 5 -66 12 -122 14 -125 3 -2 80 -33 171 -68 l166 -63 215 0 214 0 37 -60
c98 -161 87 -150 190 -182 86 -27 93 -31 89 -51 -3 -12 -11 -50 -18 -85 -12
-56 -23 -74 -118 -195 l-106 -132 -31 -298 c-17 -164 -33 -299 -35 -301 -2 -1
-46 -36 -97 -76 l-93 -72 -138 7 -138 7 -47 -83 -47 -84 31 -140 c17 -77 33
-145 35 -152 2 -6 -66 -101 -151 -209 -89 -114 -175 -235 -201 -286 l-47 -87
-146 -70 c-98 -47 -166 -73 -210 -80 -36 -6 -79 -14 -96 -16 -29 -5 -32 -10
-36 -45 l-3 -39 68 -21 c53 -16 67 -25 63 -36 -3 -9 -6 -25 -6 -36 0 -11 -29
-49 -64 -86 l-64 -67 37 -44 c36 -42 39 -44 110 -49 l73 -5 -7 -60 c-3 -33
-15 -83 -25 -111 -10 -28 -21 -70 -24 -92 l-6 -42 93 -77 c50 -43 98 -84 106
-91 12 -11 12 -20 1 -58 l-13 -46 -146 0 -146 0 -146 128 -146 127 -113 199
-113 199 17 189 17 190 -86 115 -86 115 34 191 c25 136 31 194 24 199 -7 4
-29 10 -49 13 l-38 7 0 419 0 419 -61 48 c-140 109 -236 171 -279 182 -129 32
-116 21 -130 108 l-13 77 -173 216 c-95 119 -178 226 -185 237 -10 16 -9 34 5
98 9 44 20 141 23 217 l6 138 124 86 c68 47 126 90 128 94 6 9 -26 292 -34
301 -3 4 -88 13 -189 19 l-182 13 -146 168 c-81 92 -154 170 -163 172 -84 25
-208 57 -259 67 l-64 12 4 61 3 60 -40 7 c-22 3 -59 9 -82 12 l-43 5 0 -34 c0
-33 -1 -34 -27 -27 -16 3 -111 27 -213 52 l-185 46 -88 132 -87 132 35 64 35
64 -135 197 -135 196 -23 143 -23 142 -55 3 -56 3 19 -141 18 -140 94 -145 93
-145 -9 -53 c-5 -28 -11 -54 -13 -55 -6 -6 -149 18 -157 26 -4 4 -47 77 -97
162 l-91 154 0 197 0 197 -105 50 -104 50 -3 134 -3 133 -44 -110 c-304 -766
-407 -1619 -296 -2450 123 -915 489 -1747 1090 -2477 140 -170 461 -491 633
-633 1065 -878 2397 -1266 3757 -1094 1184 150 2292 746 3078 1655 48 56 87
104 87 108 0 3 -34 6 -75 6 l-75 0 0 163 0 162 -95 128 -95 128 0 197 0 197
-72 72 -71 72 -5 79 -4 80 86 165 c47 91 86 171 86 178 0 8 -76 147 -169 310
l-168 297 20 201 c10 111 17 204 14 207 -2 3 -72 12 -153 21 l-149 15 -60 59
-61 59 -98 0 -98 0 -55 -50 -55 -50 -183 0 c-174 0 -185 -1 -195 -20 -10 -18
-21 -20 -105 -20 l-94 0 -35 38 c-19 20 -125 141 -235 267 l-201 230 0 211 0
211 39 12 39 11 13 78 14 77 -54 5 -55 5 -22 82 -22 82 269 193 268 193 1 140
0 140 130 72 129 72 161 -6 160 -6 98 50 97 50 235 17 c129 9 250 19 267 22
l32 5 3 -142 3 -142 220 -56 c171 -43 228 -62 256 -83 26 -20 47 -28 77 -28
l42 0 0 74 0 73 53 6 c28 3 86 9 127 12 l75 7 115 -86 115 -85 201 -1 c154 0
204 3 212 13 10 12 -35 163 -108 365 l-12 32 -131 0 -132 0 -61 68 -61 67 -12
110 c-7 60 -13 111 -14 112 -6 5 -122 -64 -128 -77 -5 -8 -23 -70 -40 -138
l-32 -123 -44 43 c-25 24 -67 68 -94 99 l-48 56 -7 95 -7 96 -128 111 -129
111 -101 0 c-77 0 -100 -3 -97 -12 3 -7 18 -50 34 -96 l29 -83 125 -69 c69
-38 136 -80 149 -94 l24 -25 -27 -12 c-25 -12 -26 -16 -26 -89 l0 -77 -60 -26
c-55 -24 -64 -25 -115 -15 -39 8 -59 17 -70 34 -8 13 -22 35 -31 49 l-16 24
84 -6 c83 -6 85 -5 106 22 12 15 22 31 22 34 0 4 -85 65 -189 135 l-190 129
-11 48 c-7 27 -15 49 -19 49 -4 0 -34 -24 -67 -53 -95 -84 -83 -79 -159 -62
-37 9 -73 14 -80 11 -7 -2 -64 -72 -127 -154 -76 -99 -123 -170 -139 -210 -28
-72 -18 -69 -231 -78 l-157 -7 -75 33 c-42 18 -78 40 -80 49 -3 9 -12 72 -21
141 l-17 125 24 60 24 59 114 25 115 24 122 -23 c68 -13 125 -21 129 -18 9 9
33 122 28 130 -3 5 -11 8 -17 8 -7 0 -28 5 -48 10 l-36 10 18 106 c10 59 20
107 21 109 2 1 59 10 127 20 l123 19 89 125 89 126 93 15 c78 14 104 14 172 3
44 -7 95 -13 114 -13 29 0 33 3 28 23 -3 12 -11 64 -18 115 -6 50 -16 92 -21
92 -4 0 -47 -16 -95 -35 -48 -19 -90 -35 -94 -35 -4 0 -22 38 -41 85 l-33 85
-45 6 c-75 10 -76 10 -86 73 l-10 58 48 52 c42 46 62 58 160 97 111 43 113 45
142 96 l29 52 -39 34 c-116 102 -317 255 -459 351 -682 461 -1418 728 -2250
817 -132 14 -646 27 -745 18z m2725 -1656 c3 -13 12 -55 20 -95 10 -51 28 -93
60 -146 56 -90 98 -132 150 -150 21 -8 40 -18 42 -23 1 -5 -19 -33 -45 -61
l-47 -53 -104 -10 c-57 -5 -130 -10 -163 -10 l-60 0 7 83 c4 45 9 84 10 85 2
2 27 9 57 16 37 8 54 17 56 30 8 42 -9 63 -97 120 -79 52 -89 62 -95 94 -6 43
27 110 59 117 132 31 143 31 150 3z m-190 -215 c33 -16 35 -19 35 -69 l0 -53
-102 -70 c-98 -68 -104 -71 -160 -71 l-58 0 0 50 c0 42 7 61 50 127 44 70 54
79 92 90 62 16 103 15 143 -4z m-2570 -585 c3 -3 0 -17 -6 -31 -9 -20 -20 -27
-48 -29 -32 -3 -36 -7 -44 -39 -6 -27 -17 -40 -43 -52 -43 -21 -104 -23 -104
-3 0 7 -9 16 -21 19 -16 4 -20 12 -17 39 l3 33 71 3 70 3 13 36 13 35 54 -4
c30 -3 56 -7 59 -10z"
        />
      </g>
    </svg>
  );
};

export default GlobeSilhouete;